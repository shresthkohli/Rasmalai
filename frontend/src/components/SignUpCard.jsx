import { useState } from "react";

import { signupUser } from "../api/authApi";

import { useNavigate } from "react-router-dom";


function SignupCard(){

    const Navigate = useNavigate();

    const [username,setUsername] = useState("");

    const [password,setPassword] = useState("");



    async function handleClick(e){


        e.preventDefault();

        const result = await signupUser(

            username,

            password

        );

        console.log("RESULT: ", result);

        if (result.success) {

            alert(result.message);

            console.log(result);

            Navigate("/");

        }

        else {

            alert(result.message);

        }

    }



    return (

        <div className="p-8 m-10 border rounded-4xl">


            <h1 className="text-3xl font-bold mb-5">

                Create Account

            </h1>



            <form

            onSubmit={handleClick}

            className="flex flex-col gap-4 max-w-sm"

            >


                <input

                className="border p-3 rounded"

                placeholder="Username"

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

                />



                <input

                className="border p-3 rounded"

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                />



                <button

                className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"

                >

                    Signup

                </button>



            </form>


        </div>

    )

}


export default SignupCard;