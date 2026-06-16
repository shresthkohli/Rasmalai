export async function loginUser(username,password){


    const res = await fetch("/api/auth/login",{


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        credentials:"include",


        body:JSON.stringify({

            username,
            password

        })


    });



    const data = await res.json();


    return data;


}

export async function signupUser(username,password){


    const res = await fetch("/api/auth/signup",{


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify({

            username,
            password

        })


    });



    const data = await res.json();


    return data;


}