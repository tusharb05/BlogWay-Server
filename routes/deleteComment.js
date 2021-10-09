const Comment = require("../models/Comment");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { commentID } = req.body;
  const deleted = await Comment.findByIdAndDelete(commentID);
  if (deleted) {
    const comments = await Comment.find({});
    res.json({ comments });
  } else {
    res.json({ status: "failure" });
  }
});

module.exports = router;
