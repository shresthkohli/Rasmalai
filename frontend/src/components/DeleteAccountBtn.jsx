import { deleteAccount } from "../api/userApi";

import { useAuth } from "../context/AuthContext";

export default function DeleteAccountBtn() {

    const { user, setUser } = useAuth();

    async function handleClick(e) {

        e.preventDefault();

        const confirmation = window.confirm(`Are you sure you want to delete your account, ${user.username}?`);

        if (confirmation) {

            const result = await deleteAccount();

            if (result.success) {

                setUser(null);

            }

            alert(result.message);

        }

    }

    return (
        <button onClick={handleClick}
            className="m-5 p-2 hover:text-red-500 border-r border-l"
        >
            Delete account
        </button>
    );

}