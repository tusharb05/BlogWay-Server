const Comment = require("../models/Comment");
const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const comments = await Comment.find({ blogID: req.params.id });
  res.json({ comments });
});

module.exports = router;
