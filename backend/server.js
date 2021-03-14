const express = require("express");
// const graphqlHTTP = require("express-graphql");
// const climbSchema = require("./schema/ClimbQL");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Climb = require('./schema/Climb');
const climbSeeds = require('./seeds/ClimbSeeds');
const { json } = require("express");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema: climbSchema,
// 		graphiql: true
// 	})
// );

// ATLAS DB
const uri = process.env.MONGO_URI;
mongoose
	.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(async () => {
		console.log("Connected to database");
		const climbs = await Climb.find();
		if (!climbs.length) {
			console.log('no climbs, seeding...');
			await Climb.insertMany(climbSeeds, (err, docs) => {
				if (err) {
					console.log(`Something went wrong: ${err}`);
				}
			});
		}

	})
	.catch((err) => `Error in connecting to database: ${err}`);
const { connection } = mongoose;
connection.once("open", () => {
	console.log("Mongoose connection open");
});

app.get("/", (req, res) => {
	// Climb.insertMany(climbSeeds, (err, docs) => {
	// 	if (err) {
	// 		console.log(`Something went wrong: ${err}`);
	// 	}
	// })
	res.send("Sample endpoint");
});

app.get('/api/climbs', async (req, res) => {
	const climbs = await Climb.find();
	res.status(200).json(climbs);
});

app.get('/api/climbs/:id', async (req, res) => {
	const climb = await Climb.findById(req.params.id);
	if (climb) {
		res.status(200).json(climb);
	} else {
		res.status(404).json({msg: 'Not found'});
	}
});

app.post('/api/climbs', async (req, res) => {
	// TODO: add validation
	const newClimb = new Climb(req.body);
	await newClimb.save();
	res.status(201).json(newClimb);
});

app.put('/api/climbs/:id', async (req, res) => {
	await Climb.findByIdAndUpdate(req.params.id, req.body);
	res.status(201).json({msg: 'Successfuly updated'});
});

app.delete('/api/climbs/:id', async(req, res) =>{
	await Climb.findByIdAndDelete(req.params.id);
	res.status(204).json({msg: 'Deleted'});
})

// TODO: 404

// ROUTES
// climbRoutes
// userRoutes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
