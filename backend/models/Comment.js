const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
	text: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "users" },
	climb: { type: Schema.Types.ObjectId, ref: "climbs" },
	rating: { type: Number, required: true }
});

const Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;
