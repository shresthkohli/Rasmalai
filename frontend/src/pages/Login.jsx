import { useState } from "react";

import { loginUser } from "../api/authApi";

import { useAuth } from "../context/AuthContext";



function Login() {


    const { setUser } = useAuth();



    const [username, setUsername] =
        useState("");



    const [password, setPassword] =
        useState("");




    async function handleLogin(e) {


        e.preventDefault();



        const result = await loginUser(

            username,

            password

        );



        if (result.success) {


            setUser({

                username

            });


        }


    }




    return (

        <form onSubmit={handleLogin}>


            <input

                placeholder="username"

                value={username}

                onChange={(e) => setUsername(e.target.value)}

            />



            <input

                placeholder="password"

                type="password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

            />



            <button>

                Login

            </button>


        </form>

    )

}


export default Login;