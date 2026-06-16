const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");


const app = express();

app.use(cookieParser());

app.use(express.json());



const authRoutes =
    require("./routes/auth");

const userRoutes =
    require("./routes/user");

const postRoutes =
    require("./routes/postRoutes");

app.use(express.static("public"));
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => {

    fs.readFile(
        "./public/Home.html",
        "utf8",
        (err, data) => {

            res.send(data);

        });

});


// ERROR HANDLER MIDDLEWARE
app.use(errorHandler);


app.listen(3000, () => {

    console.log("Server running");

});