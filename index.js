const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const createBlogRoute = require("./routes/createBlog");
const getAllBlogsRoute = require("./routes/getAllBlogs");
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/user/register", registerRoute);
app.use("/api/user/login", loginRoute);
app.use("/api/blog/create", createBlogRoute);
app.use("/api/blog/get/all", getAllBlogsRoute);

app.listen(PORT, () => console.log("server running on port 5000"));
