const router = require("express").Router();
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

router.post("/", async (req, res) => {
  const { blogID } = req.body;
  const deletedBlog = await Blog.deleteOne({ _id: blogID });

  const deletedComments = await Comment.deleteMany({ blogID: blogID });

  if (deletedBlog) return res.json({ status: "deleted" });
  res.json({ status: "failure" });
});

module.exports = router;
