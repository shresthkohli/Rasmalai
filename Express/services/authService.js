const bcrypt = require("bcrypt");

const mydatabase =
    require("../database/db");

const sessionService = require("./sessionService");

const AppError = require("../utils/AppError");


// SIGNUP SERVICE
async function signUp(username, password) {

    const hashedPassword =
        await bcrypt.hash(password, 10);


    try {

        await mydatabase.query(
            `
            INSERT INTO users
            (username,password)

            VALUES($1,$2)
            `,
            [
                username,
                hashedPassword
            ]
        );


        return {
            message: "User created successfully!"
        };


    }

    catch (err) {
        console.log(err);

        if (err.code === "23505") {

            throw new AppError(
                409,
                "User already exists!"
            );

        }

        throw err;

    }

}


// LOGIN SERVICE
async function login(username, password) {


    const result =
        await mydatabase.query(
            `
            SELECT *
            FROM users
            WHERE username = $1
            `,
            [username]
        );


    const user = result.rows[0];


    if (!user) {

        throw new AppError(
            404,
            "User Not Found!"
        );

    }


    const match =
        await bcrypt.compare(
            password,
            user.password
        );


    if (!match) {

        throw new AppError(
            401,
            "Wrong Passord!"
        );

    }

    const sessionId =
        await sessionService.createSession(user.id);

    return {
        sessionId: sessionId
    };

}


module.exports = {
    login,
    signUp
};