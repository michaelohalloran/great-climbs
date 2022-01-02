const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
	text: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User" },
	climb: { type: Schema.Types.ObjectId, ref: "Climb" },
	rating: { type: Number, required: true }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
