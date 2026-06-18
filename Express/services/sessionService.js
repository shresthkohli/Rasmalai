const mydatabase = require("../database/db");

const crypto = require("crypto");

// GENERATE RANDOM SESSION ID
function generateSessionId() {
    return crypto.randomBytes(32).toString("hex");
}

// CREATE SESSION
async function createSession(userId) {
    const sessionId = generateSessionId();

    await mydatabase.query(
        `
        INSERT INTO sessions
        (user_id, session_id, expires_at)
        VALUES
        ($1, $2, NOW() + INTERVAL '7 days')
        `,
        [userId, sessionId]
    );

    return sessionId;
}

// GET SESSION
async function getSession(sessionId) {

    const result = 
        await mydatabase.query(
            `
            SELECT
            users.username,
            sessions.user_id
            
            FROM sessions
            JOIN users
            ON sessions.user_id = users.id
            WHERE session_id = $1
            `,
            [sessionId]
        );

    return result.rows[0];
}


// DELETE SESSION
async function deleteSession(sessionId) {
    await mydatabase.query(
        `
        DELETE FROM sessions
        WHERE session_id = $1
        `,
        [sessionId]
    );
}


module.exports = {
    createSession,
    getSession,
    deleteSession
}