const router = require("express").Router();
const Blog = require("../models/Blog");
const User = require("../models/User");

router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  let mainArr = [];
  const user = await User.find({ _id: userID });

  user[0]?.likedBlogsID?.map(async (id, index) => {
    const blog = await Blog.findOne({ _id: id });
    // console.log(blog);
    mainArr.push(blog);
    if (user[0]?.likedBlogsID?.length === index + 1)
      return res.json(mainArr.reverse()); //last element
    // console.log(mainArr);
  });
});

module.exports = router;
