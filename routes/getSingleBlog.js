const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/:id", async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  if (blog) return res.json({ blog });
  res.json({ status: "not found" });
});

module.exports = router;
