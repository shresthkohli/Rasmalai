import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoutes";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";



function App() {


  const [user, setUser] =
    useState(null);

  const [posts, setPosts] = useState([]);

  useEffect(() => {


    fetch("/user/me", {

      credentials: "include"

    })

      .then(res => res.json())

      .then(data => {


        if (data.loggedIn) {

          setUser(data.user);

        }


      });


  }, []);



  return (

    <BrowserRouter>


      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Home posts = {posts} setPosts = {setPosts} />}
        />


        <Route
          path="/login"
          element={
            <Login
              setUser={setUser}
            />
          }
        />


        <Route
          path="/signup"
          element={<Signup />}
        />


        <Route

          path="/profile"

          element={

            <ProtectedRoute user={user}>

              <Profile />

            </ProtectedRoute>

          }

        />

        <Route
          path="/posts"
          element={<Posts />}
        />

        <Route

          path="/create-post"

          element={

            <ProtectedRoute user={user}>

              <CreatePost setPosts = {setPosts} />

            </ProtectedRoute>

          }

        />


      </Routes>

      <Footer />


    </BrowserRouter>

  )

}


export default App;