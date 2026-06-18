const userService = require("../services/userService");

const mydatabase =
    require("../database/db");

const sessionService =
    require("../services/sessionService");

console.log("request reached userController.");

// ME CONTROLLER
async function me(req, res, next) {
    try {
        const cookies = req.cookies;

        if (!cookies) {
            res.json({
                loggedIn: false,
            });
            return;
        }

        const sessionId = cookies.sessionId;
        const user = await sessionService.getSession(sessionId);

        if (!user) {
            res.json({
                loggedIn: false,
            });
            return;
        }

        res.json({
            loggedIn: true,
            user: {
                username: user.username
            }
        });
    }

    catch (err) {
        next(err);
    }

}

// PROFILE CONTROLLER
async function profile(req, res, next) {
    try {
        const result = await userService.profile(req.username);

        res.status(200).json({
            success: true,
            message: `Welcome ${req.username}`
        });
    }

    catch (err) {
        next(err);
    }
}


// LOGOUT CONTROLLER
async function logout(req, res, next) {

    try {
        await userService.logout(req.sessionId);

        res.clearCookie(
            "sessionId",
            {
                httpOnly: true
            }
        );

        res.status(200).json({
            success: true,
            message: `You've been logged out, ${req.username}`
        });
    }

    catch (err) {
        console.log("logout controller found an error.");
        next(err);
    }
}


// DELETE ACCOUNT CONTROLLER
async function deleteAccount(req, res, next) {

    try {

        await userService.deleteAccount(req.username, req.sessionId);

        res.clearCookie('sessionId');
        console.log(`User ${req.username} deleted their account.`);


        res.status(200).json({
            success: true,
            message: `Account for ${req.username} has been deleted.`
        });
    }

    catch (err) {
        next(err);
    }

}


module.exports = {
    me,
    profile,
    logout,
    deleteAccount
}