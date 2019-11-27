const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean,
	GraphQLList
} = require("graphql");

const fakeClimbs = [
	{
		id: "1",
		name: "Pikes Peak",
		altitude: 14130,
		avgGrade: 6.4,
		location: "Colorado Springs, CO",
		latitude: 38.91264,
		longitude: -104.778236,
		rating: 4.8,
		price: 497.0,
		distance: 24,
		guide: "Joseph",
		isAvailable: true
	},
	{
		id: "2",
		name: "Mauna Kea",
		altitude: 13803,
		avgGrade: 6.1,
		location: "Mauna Kea, HI",
		latitude: 19.820664,
		longitude: -155.468066,
		rating: 4.7,
		price: 897.0,
		distance: 41,
		guide: "James",
		isAvailable: true
	},
	{
		id: "3",
		name: "Mount Evans",
		altitude: 14265,
		avgGrade: 4.6,
		location: "Idaho Springs, CO",
		latitude: 39.588316,
		longitude: -105.643806,
		rating: 4.9,
		price: 497.0,
		distance: 28,
		guide: "Patrick",
		isAvailable: true
	},
	{
		id: "4",
		name: "Zoncolan",
		altitude: 5740,
		avgGrade: 11.9,
		location: "Ravascletto, Italy",
		latitude: 46.5,
		longitude: 12.916667,
		rating: 4.6,
		price: 397.0,
		distance: 6.3,
		guide: "Matthew",
		isAvailable: false
	},
	{
		id: "5",
		name: "Mount Lemmon",
		altitude: 9171,
		avgGrade: 4.2,
		location: "Tucson, AZ",
		latitude: 32.443417,
		longitude: -110.788124,
		rating: 4.5,
		price: 497.0,
		distance: 29,
		guide: "Dominic",
		isAvailable: true
	}
];

const ClimbType = new GraphQLObjectType({
	name: "Climb",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		location: { type: GraphQLString },
		latitude: { type: GraphQLFloat },
		longitude: { type: GraphQLFloat },
		altitude: { type: GraphQLFloat },
		rating: { type: GraphQLFloat },
		price: { type: GraphQLFloat },
		distance: { type: GraphQLFloat },
		avgGrade: { type: GraphQLFloat },
		// dates:
		guide: { type: GraphQLString },
		// image
		isAvailable: { type: GraphQLBoolean }
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		climb: {
			type: ClimbType,
			// id will be used to retrieve specific climb
			args: { id: { type: GraphQLString } },
			resolve: (parent, args) => {
				// get data from DB/other source
				return fakeClimbs.find((climb) => climb.id === args.id);
			}
		},
		climbs: {
			type: new GraphQLList(ClimbType),
			resolve: () => {
				return fakeClimbs;
			}
		}
	}
});

// climb needs: name, location, rating, lat/lng, price, distance, avg. grade
// dates offered, guide, image, sold-out
const climbSchema = new GraphQLSchema({
	query: RootQuery
});

module.exports = climbSchema;
