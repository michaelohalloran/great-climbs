const mongoose = require("mongoose");
const { Schema } = mongoose;

const climbSchema = new Schema(
	{
		name: { type: String, required: true },
		altitude: { type: Number, required: true },
		avgGrade: { type: Number, required: true },
		location: { type: String, required: true },
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true },
		rating: { type: Number },
		price: { type: Number, required: true },
		distance: { type: Number, required: true },
		guide: { type: String, required: true },
		isAvailable: { type: Boolean, required: true },
		image: { type: String }
	},
	{
		timestamps: true
	}
);

const Climb = mongoose.model("Climb", climbSchema);
module.exports = Climb;
