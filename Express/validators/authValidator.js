const {z} = require("zod");


const signupSchema = z.object({

    username:
    z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),


    password:
    z.string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password cannot exceed 50 characters")

});


module.exports = {

    signUpSchema: signupSchema

};