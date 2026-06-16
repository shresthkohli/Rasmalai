import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {


    const { user, logout } = useAuth();



    return (

        <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white">


            <h2 className="text-2xl font-bold">
                MyApp
            </h2>



            <Link to="/">

                Home

            </Link>



            {
                user ?

                    <>


                        <span className="mr-5">

                            Welcome {user.username}

                        </span>



                        <Link

                            className="mr-5 hover:text-blue-400"

                            to="/profile">

                            Profile

                        </Link>


                        <Link

                            className="mr-5 hover:text-blue-400"

                            to="/create-post"

                        >

                            Create

                        </Link>


                        <button

                            onClick={logout}

                            className="bg-red-500 px-4 py-2 rounded-lg"

                        >

                            Logout

                        </button>


                    </>


                    :


                    <>


                        <Link

                            to="/login"

                            className="mx-3 hover:text-blue-400">

                            Login

                        </Link>



                        <Link

                            to="/signup"

                            className="mx-3 hover:text-blue-400">

                            Signup

                        </Link>


                    </>


            }


        </nav>

    )

}


export default Navbar;