const router = require("express").Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const { title, body, author, authorID } = req.body;
  const newBlog = new Blog({
    title: title,
    body: body,
    author: author,
    authorID: authorID,
    likeCount: 0,
    commentCount: 0,
  });

  try {
    const savedBlog = await newBlog.save();
    if (savedBlog) return res.json({ status: "saved", ...savedBlog._doc });
  } catch (error) {
    res.json({ status: "failure", error: error });
  }
});

module.exports = router;
