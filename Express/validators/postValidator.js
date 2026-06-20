const { z } = require("zod");


const createPostSchema = z.object({

    title:
    z.string()
    .min(1, "Title cannot be empty")
    .max(100, "Title cannot exceed 100 characters"),


    content:
    z.string()
    .min(1, "Content cannot be empty")
    .max(1000, "Content cannot exceed 1000 characters")

});


module.exports = createPostSchema;