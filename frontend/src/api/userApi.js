export async function getCurrentUser(){


    const res = await fetch("/api/user/me",{


        credentials:"include"


    });



    const data = await res.json();


    return data;


}



export async function logoutUser(){


    const res = await fetch("/api/user/logout",{

        credentials:"include"

    });



    return res.json();


}


// DELETE ACCOUNT
export async function deleteAccount() {
    

    const res = await fetch("/api/user/deleteAccount",{

        method: "DELETE",

        credentials: "include"

    });

    return await res.json();

}