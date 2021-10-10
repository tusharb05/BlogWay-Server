const Comment = require("../models/Comment");
const Blog = require("../models/Blog");
const router = require("express").Router();

router.post("/", async (req, res) => {
  let { authorID, blogID, comment, author } = req.body;
  const newComment = new Comment({
    authorID,
    blogID,
    comment,
    author,
  });

  const saved = await newComment.save();
  const updated = await Blog.findByIdAndUpdate(blogID, {
    $inc: { commentCount: 1 },
  });
  if (saved) {
    const comments = await Comment.find({ blogID: blogID });
    res.json({ comments, status: "updated" });
  } else {
    {
      res.json({ status: "failure" });
    }
  }
});

module.exports = router;
