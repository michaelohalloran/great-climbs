const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true }
	// TODO climbs have comments; users don't need one because their id
	// will be stored?
	// comments: { type: String }
	// TODO ratings?  how to connect?
	// TODO avatar image?
});

const User = mongoose.model("users", userSchema);
module.exports = User;
