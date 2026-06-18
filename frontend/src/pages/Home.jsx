import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

import { getPosts } from "../api/postApi";



function Home({posts, setPosts}){
    const {user} = useAuth();

    useEffect(()=>{


        async function loadPosts(){


            const data = await getPosts();


            setPosts(data);


        }


        loadPosts();


    },[]);



    return (

        <div className="p-8">


            <Hero />

            <hr className="w-auto"/>

            <section
            className="
            grid
            gap-6
            flex
            flex-col
            items-center
            p-4
            "
            >


                <h2 className="
                mx-auto
                text-3xl
                font-bold
                
                ">

                    Latest Posts

                </h2>



                <div>


                {

                    posts.map(post=>(


                        <PostCard

                            key={post.id}

                            post={post}

                        />


                    ))

                }


                </div>


            </section>


        </div>

    )

}


export default Home;