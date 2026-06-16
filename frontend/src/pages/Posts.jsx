import { useEffect, useState } from "react";


function Posts() {


    const [posts, setPosts] =
        useState([]);



    useEffect(() => {


        fetch("/api/posts")

            .then(res => res.json())

            .then(data => {


                setPosts(data.posts);


            });


    }, []);



    return (

        <div className="p-8">


            <h1 className="text-4xl font-bold mb-6">
                Posts
            </h1>


            {
                posts.map(post => (


                    <div
                        key={post.id}
                        className="
                            bg-white
                            shadow-lg
                            rounded-xl
                            p-5
                            mb-5
                            border
                        "
                    >


                        <h2 className="text-2xl font-semibold">
                            {post.title}
                        </h2>


                        <p className="text-gray-600 mt-2">
                            {post.content}
                        </p>


                        <small className="text-sm text-blue-600">
                            By {post.username}
                        </small>


                    </div>


                ))
            }


        </div>

    )

}


export default Posts;