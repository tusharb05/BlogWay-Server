const Comment = require("../models/Comment");
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
  if (saved) {
    const comments = await Comment.find({});
    res.json({ comments, status: "updated" });
  } else {
    {
      res.json({ status: "failure" });
    }
  }
});

module.exports = router;
