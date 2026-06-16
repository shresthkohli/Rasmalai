export async function getPosts(){


    const res = await fetch("/api/posts");


    const data = await res.json();


    return data.posts;


}

export async function createPost(title,content){


    const res = await fetch("/api/posts",{


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