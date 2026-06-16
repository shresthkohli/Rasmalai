const authService =
    require("../services/authService");


// SIGNUP CONTROLLER
async function signUp(req, res, next) {

    try {
        const result =
            await authService.signUp(
                req.body.username,
                req.body.password
            );

        res.status(201).json({
            success: true,
            message: result.message
        });
    }

    catch (err) {
        next(err);
    }
}


// LOGIN CONTROLLER
async function login(req, res, next) {
    try {
        const result =
            await authService.login(
                req.body.username,
                req.body.password
            );


        res.cookie(
            "sessionId",
            result.sessionId,
            {
                httpOnly: true,
                sameSite: "strict"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful!"
        });
    }

    catch (err) {
        next(err);
    }
}


module.exports = {
    login,
    signUp
}