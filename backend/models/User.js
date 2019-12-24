const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	comments: { type: String }
	// TODO ratings?  how to connect?
	// TODO avatar image?
});

const User = mongoose.model("User", userSchema);
module.exports = User;
