import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function PostSomethingBtn() {

    const { user } = useAuth();

    const navigate = useNavigate();

    async function handleClick(e) {

        e.preventDefault();

        if (user) {
            navigate("/create-post");
        }
        else {
            alert("Please Login First!");
        }
    }

    return (
        <button onClick={handleClick} className="hover:text-blue-500">
            Post Something
        </button>
    );
}