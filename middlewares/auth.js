const jwt = require('jsonwebtoken');

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
    }
}

module.exports = auth;