const jwt = require('jsonwebtoken');

const auth = {
    isAuthenticated: async (req, res, next) => {
        try {
            // get the token
            const token = req.headers['authorization']?.split(' ')[1];

            // check if the token is present
            if (!token) {
                return res.status(500).json({ message: 'No token provided' });
            }

            // is the token valid
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // if the decoded is null, token is invalid
            if (!decoded) {
                return res.status(500).json({ message: 'invalid token' });
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