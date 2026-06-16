const express = require("express");

const router = express.Router();

const requireLogin =
require("../middleware/authMiddleware");

const userController = require("../controllers/userController");

router.get("/me", userController.me);

router.use(requireLogin);

// PROFILE ENDPOINT
router.get(
"/profile", userController.profile
);

// LOGOUT ENDPOINT
router.get(
"/logout", userController.logout
);

// DELETE ACCOUNT ENDPOINT
router.post(
"/deleteAccount", userController.deleteAccount
);

module.exports = router;