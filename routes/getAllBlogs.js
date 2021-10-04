const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  if (allBlogs) return res.json(allBlogs);
  res.json({ status: "failure" });
});

module.exports = router;
