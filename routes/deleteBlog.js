const router = require("express").Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const { blogID } = req.body;
  const deletedBlog = await Blog.deleteOne({ _id: blogID });
  if (deletedBlog) return res.json({ status: "deleted" });
  res.json({ status: "failure" });
});

module.exports = router;
