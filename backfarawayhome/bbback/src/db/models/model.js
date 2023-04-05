const mongoose = require("mongoose");
const UserSchema = require("../schemas/user");
const GraphSchema = require("../schemas/graph");
const ConstituencySchema = require("../schemas/constituency");
const PostSchema = require("../schemas/Post");
const CounterSchema = require("../schemas/Counter");

exports.Constituency = mongoose.model("Constituency", ConstituencySchema);
exports.User = mongoose.model("User", UserSchema);
exports.Graph = mongoose.model("Graph", GraphSchema);
exports.Post = mongoose.model("Post", PostSchema);
exports.Counter = mongoose.model("Counter", CounterSchema);
