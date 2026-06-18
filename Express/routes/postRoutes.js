const express = require("express");

const router = express.Router();


const postController =
    require("../controllers/postController");


const requireLogin =
    require("../middleware/authMiddleware");



// CREATE POST ROUTER
router.post(
    "/",
    requireLogin,
    postController.createPost
);

// GET ALL POSTS ROUTER
router.get(
    "/",
    postController.getPosts
);

// GET MY POSTS ROUTER
router.get(
    "/me",
    requireLogin,
    postController.getMyPosts
);

// DLETE POST ROUTER
router.delete(
    "/:id",
    requireLogin,
    postController.deletePost
);


module.exports = router;