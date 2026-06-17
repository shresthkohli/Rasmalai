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

            else {
                alert(result.message);
                console.log("DELETED USER: ", result);
                setUser(null);
            }

        }

    }

    return (
        <button onClick={handleClick}>
            Delete account
        </button>
    );

}