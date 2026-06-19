import { API_URL } from "../config";


// ME API
export async function getCurrentUser(){


    const res = await fetch(`${API_URL}/api/user/me`,{


        credentials:"include"


    });



    const data = await res.json();


    return data;


}


// LOGOUT API
export async function logoutUser(){


    const res = await fetch(`${API_URL}/api/user/logout`,{

        credentials:"include"

    });



    return res.json();


}


// DELETE ACCOUNT
export async function deleteAccount() {
    

    const res = await fetch(`${API_URL}/api/user/deleteAccount`,{

        method: "DELETE",

        credentials: "include"

    });

    return await res.json();

}