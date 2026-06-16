import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

import { getPosts } from "../api/postApi";



function Home({posts, setPosts}){

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



            <section>


                <h2 className="
                text-3xl
                font-bold
                mb-8
                ">

                    Latest Posts

                </h2>



                <div className="
                grid
                gap-6
                ">


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