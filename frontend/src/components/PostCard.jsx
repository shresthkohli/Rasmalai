import { useAuth } from "../context/AuthContext";
import { deletePost } from "../api/postApi";

function PostCard({ post, onDelete }) {

    const { user } = useAuth();

    async function handleDelete() {

        const confirmation = window.confirm(
            "Delete this post?"
        );


        if (!confirmation) {

            return;

        }


        const result = await deletePost(post.id);


        if (result.success) {

            onDelete(post.id);

        }

        alert(result.message);

    }

    return (

        <div
            className="
            mx-auto
            my-10
            p-2
            border-2
            border-dashed
            rounded-3xl
            w-full
            landscape:w-[70%]
            max-w-[900px]
            h-auto
            bg-gray-200
            shadow-md
            "
        >
            <div className="flex justify-end">
                {
                    user &&
                    user.username === post.username &&

                    <button

                    onClick={handleDelete}

                    className="
                    bg-red-300
                    p-2
                    rounded-xl
                    "

                    >

                        Delete Post

                    </button>
                }
            </div>

            <div 
            className="
            flex
            justify-between
            text-gray-500
            "
            >
                <small
                className="
                m-2
                text-lg
                "
                >
                    By {post.username}
                </small>
                
                <small
                className="
                m-2
                text-lg
                text-end
                "
                >
                    Posted on {
                        new Date(post.created_at).toLocaleDateString(
                            "en-IN",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }
                        )
                    }
                </small>

            </div>
            <div
            className="
            bg-white
            p-5
            rounded-2xl
            "
            >

                <h2 className="
                text-2xl
                font-semibold
                ">

                    {post.title}

                </h2>

                <hr />

                <p className="
                mt-3
                text-gray-600
                ">

                    {post.content}

                </p>
            </div>

        </div>

    )

}


export default PostCard;