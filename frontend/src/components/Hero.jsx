import { useAuth } from "../context/AuthContext";

function Hero() {

    const { user } = useAuth();

    return (

        <section className="
        py-20
        text-center
        ">


            <h1 className="
            text-7xl
            font-bold
            w-full
            ">
                {user ? user.username : "Guest"}
                ! Welcome to MyApp

            </h1>

            <p className="
            mt-10
            text-gray-600
            text-lg
            text-center
            w-[60%]
            mx-auto
            ">

                This is my first project (And every feature works!). <br />
                I built this social media app from scratch as my very first step into web development! It has all the core features working under the hood: signing up, logging in, creating posts, and managing your account. <br />
                The best way to test it out? Create an account and drop a post right here on the feed to let me know what you think!
                And there's more info for the techies in the footer section.

            </p>


        </section>

    )

}


export default Hero;