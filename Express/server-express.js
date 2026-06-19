const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");


const app = express();

app.use(cors({

    origin: true,

    credentials: true

}));

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


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{

    console.log(`Server running on ${PORT}`);

});