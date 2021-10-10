const Comment = require("../models/Comment");
const router = require("express").Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const { commentID, blogID } = req.body;
  const deleted = await Comment.findByIdAndDelete(commentID);
  const updated = await Blog.findByIdAndUpdate(blogID, {
    $inc: { commentCount: -1 },
  });
  if (deleted) {
    const comments = await Comment.find({ _id: blogID });
    res.json({ comments });
  } else {
    res.json({ status: "failure" });
  }
});

module.exports = router;
