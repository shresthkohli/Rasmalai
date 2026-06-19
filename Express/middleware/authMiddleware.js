const sessionService = require("../services/sessionService");


async function requireLogin(req,res,next){

    const cookies = req.cookies;

    if(!cookies.sessionId){

        res.status(401).json({
            success: false,
            message: "Please Login first!"
        });
        return;

    }

    const sessionId = cookies.sessionId;

    const user = await sessionService.getSession(sessionId);

    if(!user){

        res.status(401).json({
            success: false,
            message: "Invalid Session!"
        });
        return;

    }

    console.log(user);

    req.username = user.username;
    req.user_id = user.user_id;
    req.sessionId = sessionId;


    next();

}


module.exports = requireLogin;