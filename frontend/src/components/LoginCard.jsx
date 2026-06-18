import { useState } from "react";

import { loginUser } from "../api/authApi";

import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";



function LoginCard() {


    const { setUser } = useAuth();

    const navigate = useNavigate();

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

            navigate("/");

        }

        else{
            alert(result.message);
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
        w-[70%]
        landscape:w-[50%]
        max-w-[900px]
        h-auto
        bg-gray-200
        shadow-md
        text-center
        "
        >


            <h1 className="text-4xl font-bold mb-5 mx-auto">

                Login

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

            onSubmit={handleLogin}

            >


                <input

                className="border-b p-3 w-full mx-auto my-0 text-center text-lg hover:bg-gray-100 outline-none focus:bg-gray-100"

                placeholder="Username"

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

                />



                <input

                className="border-b p-3 w-full mx-auto my-0 text-center text-lg hover:bg-gray-100 outline-none focus:bg-gray-100"

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                />



                <button

                className="bg-blue-300 p-3 w-full mx-auto my-0 text-center text-lg  hover:bg-blue-400"

                >

                    Login

                </button>



            </form>
        </div>

        </div>

    )

}


export default LoginCard;