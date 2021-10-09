const Comment = require("../models/Comment");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const comments = await Comment.find({});
  res.json({ comments });
});

module.exports = router;
