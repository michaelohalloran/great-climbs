const express = require("express");
const graphqlHTTP = require("express-graphql");
const climbSchema = require("./schema/Climb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(
	"/graphql",
	graphqlHTTP({
		schema: climbSchema,
		graphiql: true
	})
);

// ATLAS DB
const uri = process.env.MONGO_URI;
mongoose
	.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to database"))
	.catch((err) => `Error in connecting to database: ${err}`);
// const { connection } = mongoose;
// connection.once("open", () => {
// 	console.log("Mongoose connection open");
// });

// app.get("/", (req, res) => {
// 	res.send("Sample endpoint");
// });

// ROUTES
// climbRoutes
// userRoutes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
