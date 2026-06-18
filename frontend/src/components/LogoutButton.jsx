import { logoutUser } from "../api/userApi";

import { useAuth } from "../context/AuthContext";

export default function LogoutBtn() {

    const { user, setUser } = useAuth();

    async function handleClick(e) {
        
        e.preventDefault();

        const confirmation = window.confirm(`Are you sure you want to Logout, ${user.username}?`);

        if (confirmation) {

            const result = await logoutUser();

            if (result.success) {
                setUser(null);
            }
            
            alert(result.message);
        }
    }

    return (
        <button onClick={handleClick} className="hover:text-red-400">
            Logout
        </button>
    );
}