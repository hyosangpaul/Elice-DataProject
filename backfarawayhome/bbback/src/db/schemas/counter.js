const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  name: {
    type: String,
  },
  totalPosts: {
    type: Number,
    required: true,
  },
});

module.exports = CounterSchema;
