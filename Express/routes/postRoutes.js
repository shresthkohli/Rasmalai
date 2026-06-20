const express = require("express");

const router = express.Router();


const postController =
    require("../controllers/postController");


const requireLogin =
    require("../middleware/authMiddleware");

const validate =
    require("../middleware/validate");

const { createPostSchema } =
    require("../validators/postValidator");

// CREATE POST ROUTER
router.post(
    "/",
    requireLogin,
    validate(createPostSchema),
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