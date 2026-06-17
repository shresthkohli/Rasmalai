const { ZodError } = require("zod");

function errorHandler(err, req, res, next) {

    console.log(err);

    if (err instanceof ZodError) {


        return res.status(400).json({

            success: false,

            message: err.issues[0].message

        });


    }

    res.status(
        err.status || 500
    ).json({
        success: false,
        message: (
            err.message || "something went wrong!"
        )
    });
}

module.exports = errorHandler;