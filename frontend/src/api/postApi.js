import { API_URL } from "../config";


// GET ALL POSTS API
export async function getPosts(){


    const res = await fetch(`${API_URL}/api/posts`);


    const data = await res.json();


    return data.posts;


}


// CREATE POST API
export async function createPost(title,content){


    const res = await fetch(`${API_URL}/api/posts`,{


        method:"POST",


        headers:{


            "Content-Type":"application/json"

        },


        credentials:"include",


        body:JSON.stringify({

            title,

            content

        })


    });



    const data = await res.json();


    return data;


}


// GET MY POSTS API
export async function getMyPosts() {

    const res = await fetch(

        `${API_URL}/api/posts/me`,

        {

            credentials: "include"

        }

    );

    return await res.json();

}


// DELETE POST API
export async function deletePost(postId){

    const res = await fetch(

        `${API_URL}/api/posts/${postId}`,

        {

            method:"DELETE",

            credentials:"include"

        }

    );

    return await res.json();

}