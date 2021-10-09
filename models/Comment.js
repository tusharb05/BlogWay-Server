const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorID: {
    type: String,
    required: true,
  },
  blogID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
