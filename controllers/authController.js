const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    registerUser: async (req, res) => {
        try {
            // if no users in the system
            // if this is the first user
            // create the user as an admin
            // get the details from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const user = await User.find({ email });

            if (user.length > 0) {
                // user already exists
                // do not allow the registration
                return res.status(400).json({ message: 'user already exists' });
            }

            // encrypt the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user object using User model
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });

            // check if this user is the first user
            // query to fetch all the users
            const users = await User.find();

            if (users.length == 0) {
                // add the role field to the newUser object
                newUser.role = 'admin';
            }

            // save the new user in the database
            const savedUser = await newUser.save();

            const { password: pass, __v, ...userData } = savedUser.toObject();

            return res.status(200).json({ message: 'new user registered', user: userData });
        } catch (error) {
            return res.status(500).json({ message: `user registration failed: ${error.message}` });
        }
    },
    loginUser: async (req, res) => {
        try {
            // get the details from the request
            const { email, password } = req.body;

            // get the user with this email from the database
            const user = await User.find({ email });

            // check if the user already registered
            if (user.length == 0) {
                // no such user
                return res.status(500).json({ message: "user not registered" });
            }

            // check if the password matches
            const isPasswordValid = await bcrypt.compare(password, user[0].password);

            if (!isPasswordValid) {
                // password incorrect
                return res.status(400).json({ message: 'password incorrect' });
            }

            // if login successful, generate a token
            const token = await jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, { expiresIn: '3h' });

            // store the token in the browser's cookies
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            });

            // user already in the system
            // password is also correct
            return res.status(200).json({ message: 'login successful' });
        } catch (error) {
            return res.status(500).json({ message: `login failed: ${error.message}` });
        }
    },
    me: async (req, res) => {
        try {
            // get the userId of the logged in user from the request object
            const userId = req.userId;

            // get the user id from the token
            const user = await User.findById(userId).select('-password -__v');

            // return the currently logged in user
            return res.status(200).json({ message: 'user logged in', user: user });

        } catch (error) {
            return res.status(500).json({ message: `error fetching user data: ${error.message}` });
        }
    },
    logout: async (req, res) => {
        try {
            // clear the cookie from the browser
            res.clearCookie('token');

            return res.status(200).json({ message: 'logout successful' });
        } catch (error) {
            return res.status(500).json({ message: `logout failed: ${error.message}` });
        }
    }
}

module.exports = authController;