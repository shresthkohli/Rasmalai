const express = require("express");

const router = express.Router();

const authController =
    require("../controllers/authController");

const validate = require("../middleware/validate");

const { signUpSchema } = require("../validators/authValidator"); 


router.post(
    "/signUp",
    validate(signUpSchema),
    authController.signUp
);

router.post(
    "/login",
    authController.login
);


module.exports = router;