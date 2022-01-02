const express = require("express");
// const graphqlHTTP = require("express-graphql");
// const climbSchema = require("./schema/ClimbQL");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Climb = require('./models/Climb');
const climbSeeds = require('./seeds/ClimbSeeds');
const climbRoutes = require('./routes/climbs');
const userRoutes = require('./routes/users');
const { checkAuth } = require('./controllers/auth');

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
app.use('/api/v1/climbs', climbRoutes);
app.use('/api/v1/users', userRoutes);

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

app.get("/", checkAuth, (req, res) => {
	return res.status(200).json({
		status: 'Success',
		user: req.user,
		msg: 'Auth check succeeded'
	})
});


// TODO: 404


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
