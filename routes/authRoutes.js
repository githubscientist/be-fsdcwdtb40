const express = require('express');
const { registerUser, loginUser, me, logout } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

const authRouter = express.Router();

// public routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

// protected routes: user should be logged in
authRouter.post("/me", isAuthenticated, me);
authRouter.post("/logout", isAuthenticated, logout);

module.exports = authRouter;