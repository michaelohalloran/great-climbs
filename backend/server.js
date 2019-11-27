const express = require("express");
const graphqlHTTP = require("express-graphql");
const climbSchema = require("./schema/Climb");
const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		schema: climbSchema,
		graphiql: true
	})
);

// app.get("/", (req, res) => {
// 	res.send("Sample endpoint");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
