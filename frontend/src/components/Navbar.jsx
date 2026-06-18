import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoutBtn from "./LogoutButton";
import PostSomethingBtn from "./PostSomethingBtn";


function Navbar() {


    const { user, logout } = useAuth();



    return (

        <nav className="flex justify-between items-center px-6 py-4 bg-black text-white sticky top-0 z-50 w-full shadow-md">

            <Link to="/"
            className="hover:text-blue-400"
            >

                Home

            </Link>



            {
                user ?

                    <>
                        <Link

                            className="hover:text-blue-400"

                            to="/profile">

                            Profile

                        </Link>

                        <Link
                            className="hover:text-blue-400"
                            to="/create-post"
                        >
                            Post Something
                        </Link>

                        <LogoutBtn />
                    </>
                    :
                    <>
                        <Link
                            to="/login"
                            className="hover:text-blue-400"
                        >

                            Login

                        </Link>

                        <Link
                            to="/signup"
                            className="hover:text-blue-400"
                        >

                            Signup

                        </Link>

                    </>

            }

        </nav>

    )

}


export default Navbar;