const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  let { userID } = req.body;
  const details = await User.findOne({ _id: userID });
  res.json({ details });
});

module.exports = router;
