import DeleteAccountBtn from "../components/DeleteAccountBtn";
import LogoutBtn from "../components/LogoutButton";
import PostSomethingBtn from "../components/PostSomethingBtn";
import PostCard from "../components/PostCard";

import { getMyPosts } from "../api/postApi";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {

    const {user} = useAuth();
    
    const [posts, setPosts] = useState([]);

    function handleDeletePost(id) {

        setPosts(prevPosts =>

            prevPosts.filter(post => post.id !== id)

        );

    }

    useEffect(() => {

        async function fetchPosts() {

            const result = await getMyPosts();

            if (result.success) {

                setPosts(result.posts);

            }

        }

        fetchPosts();

    }, []);

    return (
        <div className="p-2">
            <h1 className="
            text-5xl
            font-bold
            m-5
            "
            >
                {user.username}'s Profile
            </h1>
            <div className="p-5">
            <PostSomethingBtn />
            <DeleteAccountBtn />
            <LogoutBtn />
            </div>

            <hr />

            <h2 className="text-3xl text-center font-bold m-5">

                My Posts

            </h2>

            {
                posts.length === 0

                    ?

                    <p>

                        You haven't published any posts yet.

                    </p>

                    :


                    posts.map(post => (

                        <PostCard

                            key={post.id}

                            post={post}

                            onDelete={handleDeletePost}

                        />

                    ))

            }
        </div>

    )

}


export default Profile;