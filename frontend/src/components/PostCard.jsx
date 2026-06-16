function PostCard({post}){


    return (

        <div className="
        bg-white
        shadow-lg
        rounded-xl
        p-5
        border
        ">


            <h2 className="
            text-2xl
            font-semibold
            ">

                {post.title}

            </h2>



            <p className="
            mt-3
            text-gray-600
            ">

                {post.content}

            </p>



            <small className="
            text-blue-600
            ">

                By {post.username}

            </small>


        </div>

    )

}


export default PostCard;