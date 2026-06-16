const mydatabase =
    require("../database/db");

const AppError =
    require("../utils/AppError");


// CREATE POST SERVICE
async function createPost(username, title, content) {

    // Find user id using username

    const userResult =
        await mydatabase.query(
            `
                SELECT id
                FROM users
                WHERE username = $1
                `,
            [username]
        );


    const user = userResult.rows[0];


    if (!user) {

        throw new AppError(
            404,
            "User not found"
        );

    }



    // Create post

    const postResult =
        await mydatabase.query(
            `
                INSERT INTO posts
                (user_id, title, content)

                VALUES($1,$2,$3)

                RETURNING *
                `,
            [
                user.id,
                title,
                content
            ]
        );


    return postResult.rows[0];

}


// GET ALL POSTS SERVICE
async function getPosts() {

    const result =
        await mydatabase.query(
        `
         SELECT 
             posts.id,
             posts.title,
             posts.content,
             posts.created_at,
             users.username

         FROM posts

         JOIN users

         ON posts.user_id = users.id

         ORDER BY posts.created_at DESC
        `
        );


    return result.rows;

}


// DELETE POST SERVICE
async function deletePost(postId, username){


    const userResult =
        await mydatabase.query(
            `
            SELECT id
            FROM users
            WHERE username=$1
            `,
            [username]
        );


    const user = userResult.rows[0];


    if(!user){

        throw new AppError(
            404,
            "User not found"
        );

    }



    const result =
        await mydatabase.query(
            `
            DELETE FROM posts

            WHERE id=$1

            AND user_id=$2

            RETURNING *
            `,
            [
                postId,
                user.id
            ]
        );

    /* THIS QUERY RETURNS:-
        {
            command: "DELETE",
            rowCount: 1,

            rows: [
                {
                    id:1,
                    user_id:3,
                    title:"MyFirstPost",
                    content:"Learning",
                    created_at:"2026..."
                }
            ]
        }
    */
   
    if(result.rows.length===0){

        throw new AppError(
            403,
            "You cannot delete this post"
        );

    }


    return result.rows[0];

}


module.exports = {

    createPost,
    getPosts,
    deletePost

};