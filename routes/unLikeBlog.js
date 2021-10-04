const router = require("express").Router();
const Blog = require("../models/Blog");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const { userID, blogID } = req.body;
  //update the like count
  const update1 = await Blog.findOneAndUpdate(
    { _id: blogID },
    { $inc: { likeCount: -1 } }
  );
  if (!update1) return res.json({ status: "failure in incrementing" });

  //delete the id from likedBlogsID
  const update2 = await User.findOneAndUpdate(
    { _id: userID },
    { $pull: { likedBlogsID: blogID } }
  );
  if (!update2) return res.json({ status: "failure in pushing id" });

  res.json({ status: "updated" });
});

module.exports = router;
