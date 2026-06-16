const sessionService = require("./sessionService");
const mydatabase = require("../database/db");
const AppError = require("../utils/AppError");


// PROFILE SERVICE
function profile(username) {
    return;
}


// LOGOUT SERVICE
async function logout(sessionId, username) {

    await sessionService.deleteSession(sessionId);
    return;

}


// DELETE ACCOUNT SERVICE
async function deleteAccount(username, sessionId) {

    await mydatabase.query(
        `DELETE FROM users WHERE username = $1`,
        [username]
    );

    await sessionService.deleteSession(sessionId);

    return;

}


module.exports = {
    profile,
    logout,
    deleteAccount
}