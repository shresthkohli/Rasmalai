import { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser, logoutUser } from "../api/userApi";


const AuthContext = createContext();



export function AuthProvider({ children }) {


    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {


        async function checkUser() {


            try {


                const result = await getCurrentUser();

                console.log("ME RESPONSE:", result);


                if (result.loggedIn) {


                    setUser(result.user);


                }


            }

            catch (err) {


                console.log(err);


            }


            finally {


                setLoading(false);


            }


        }



        checkUser();


    }, []);




    async function logout() {


        await logoutUser();


        setUser(null);


    }




    if (loading) {

        return <h1>Loading...</h1>

    }



    return (

        <AuthContext.Provider

            value={{

                user,

                setUser,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    )

}




export function useAuth() {

    return useContext(AuthContext);

}