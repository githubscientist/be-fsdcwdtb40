const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = {
    isAuthenticated: async (req, res, next) => {
        try {
            // get the token
            const token = req.cookies?.token;

            // check if the token is present
            if (!token) {
                return res.status(500).json({ message: 'user not logged in' });
            }

            // is the token valid
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // if the decoded is null, token is invalid
            if (!decoded) {
                return res.status(500).json({ message: 'unauthorized access' });
            }

            // get the user id from the token
            req.userId = decoded.id;

            // call the next middleware
            next();
        } catch (error) {
            return res.status(500).json({ message: `error fetching user data: ${error.message}` });
        }
    },

    allowRoles: (roles) => {
        return async (req, res, next) => {
            // get the userId from the request object
            const userId = req.userId;

            // get the logged in user object from the database
            const user = await User.findById(userId);

            // get the role of the user
            const role = user.role;

            // check if the role is in the allowed roles
            if (!roles.includes(role)) {
                // return an error
                return res.status(401).json({ message: 'Unauthorized access' });
            }

            // allow the user to the next middleware
            next();
        }
    }
}

module.exports = auth;