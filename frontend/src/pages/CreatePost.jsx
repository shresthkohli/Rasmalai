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

        <div className="
        mx-auto
        my-10
        p-2
        border-2
        border-dashed
        rounded-3xl
        w-[90%]
        h-auto
        bg-gray-200
        shadow-md
        text-center
        "
        >


            <h1 className="text-3xl font-bold mb-5 mx-auto">

                Post Something

            </h1>


        <div
        className="
        bg-white
        rounded-2xl
        flex
        flex-col
        overflow-hidden
        "
        >

            <form

            onSubmit={handleSubmit}

            >


                <input

                className="border-b p-3 w-full mx-auto my-0 text-left text-3xl font-semibold hover:bg-gray-100 outline-none focus:bg-gray-100"

                placeholder="Title"

                value={title}

                onChange={(e)=>setTitle(e.target.value)}

                />



                <textarea

                className=" p-3 w-full mx-auto my-0 text- text-xl hover:bg-gray-100 outline-none focus:bg-gray-100"

                type="textbox"

                placeholder="Content"

                value={content}

                onChange={(e)=>setContent(e.target.value)}

                />



                <button

                className="bg-blue-300 p-3 w-full mx-auto my-0 text-center text-lg hover:bg-blue-400"

                >

                    Publish

                </button>



            </form>
        </div>

        </div>

    )

}


export default CreatePost;