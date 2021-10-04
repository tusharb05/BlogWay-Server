const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/:userID", async (req, res) => {
  const foundBlogs = await Blog.find({ authorID: req.params.userID });
  res.json(foundBlogs);
});

module.exports = router;
