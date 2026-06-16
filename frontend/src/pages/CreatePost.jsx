import { useState } from "react";

import { createPost } from "../api/postApi";

import { useNavigate } from "react-router-dom";


function CreatePost({ setPosts }) {


    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(e) {


        e.preventDefault();



        const result = await createPost(

            title,

            content

        );

        console.log(result);

        if (result.success) {


            setPosts(prev => [

                result.post,

                ...prev

            ]);

            setTitle("");

            setContent("");

            navigate("/");

        }

    }



    return (

        <div className="p-8">


            <h1 className="text-3xl font-bold mb-6">

                Create Post

            </h1>



            <form

                onSubmit={handleSubmit}

                className="flex flex-col gap-4 max-w-xl"

            >


                <input

                    className="border p-3 rounded"

                    placeholder="Title"

                    value={title}

                    onChange={(e) => setTitle(e.target.value)}

                />



                <textarea

                    className="border p-3 rounded"

                    placeholder="Content"

                    rows="5"

                    value={content}

                    onChange={(e) => setContent(e.target.value)}

                />



                <button

                    className="bg-blue-500 text-white p-3 rounded"

                >

                    Publish

                </button>


            </form>


        </div>

    )

}


export default CreatePost;