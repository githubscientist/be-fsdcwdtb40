const User = require('../models/user');
const bcrypt = require('bcrypt');

const authController = {
    registerUser: async (req, res) => {
        try {
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

            // save the new user in the database
            const savedUser = await newUser.save();

            const { password: pass, __v, ...userData } = savedUser.toObject();

            return res.status(200).json({ message: 'new user registered', user: userData });
        } catch (error) {
            return res.status(500).json({ message: `user registration failed: ${error.message}` });
        }
    }
}

module.exports = authController;