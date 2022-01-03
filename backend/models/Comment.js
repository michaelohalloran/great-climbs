const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
	text: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", required: [true, 'Comment must have an author'] },
	climb: { type: Schema.Types.ObjectId, ref: "Climb", require: [true, 'Comment must belong to a climb'] },
	rating: { type: Number, required: true },
}, {
	toJSON: { virtuals: true },
	toObject: { virtuals: true }
});

commentSchema.pre(/^find/, function (next) {
	this.populate({
		path: 'climb',
		select: 'name'
	}).populate({
		path: 'user',
		select: 'name'
	});
	next();
})

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
