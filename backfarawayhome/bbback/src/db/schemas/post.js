const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    writer_id: {
      type: String,
      required: true,
    },
    writerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
