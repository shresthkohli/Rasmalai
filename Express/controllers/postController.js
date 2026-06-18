const postService =
    require("../services/postService");


// CREATE POST CONTROLLER
async function createPost(req, res, next) {


    try {


        const post =
            await postService.createPost(
                req.username,
                req.body.title,
                req.body.content
            );


        res.status(201).json({

            success:true,

            message:"Post created successfully!",

            post

        });


    }


    catch(err){

        next(err);

    }

}


// GET ALL POSTS CONTROLLER
async function getPosts(req, res, next){

    try{

        const posts =
            await postService.getPosts();


        res.status(200).json({

            success:true,
            posts

        });


    }

    catch(err){

        next(err);

    }

}


// GET MY POSTS CONTROLLER
async function getMyPosts(req,res,next){


    try{


        const userId = req.user_id;
        console.log("USER ID:", req.user_id);

        const posts = await postService.getMyPosts(userId);


        res.json({

            success:true,

            posts

        });


    }


    catch(err){

        next(err);

    }


}


// DELETE POST CONTROLLER
async function deletePost(req, res, next){

    try{

        const deletedPost =
            await postService.deletePost(
                req.params.id,
                req.username
            );


        res.status(200).json({

            success:true,

            message:"Post deleted successfully!",

            post: deletedPost

        });

    }

    catch(err){

        next(err);

    }

}


module.exports = {

    createPost,
    getPosts,
    getMyPosts,
    deletePost

};