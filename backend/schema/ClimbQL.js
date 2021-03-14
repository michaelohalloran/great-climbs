const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLFloat,
	GraphQLBoolean,
	GraphQLList,
	GraphQLInt
} = require("graphql");

const Climb = require("../models/Climb");
const User = require("../models/User");
const Comment = require("../models/Comment");

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

const fakeUsers = [
	{
		id: 1,
		name: "Bob",
		email: "bob@gmail.com",
		comments: [
			{ userId: 1, climbId: "2", rating: 5, text: "Great ride on Mauna Kea" },
			{ userId: 1, climbId: "1", rating: 5, text: "Tough climb" }
		]
	},
	{
		id: 2,
		name: "James",
		email: "james@gmail.com",
		comments: [
			{ userId: 2, climbId: "2", rating: 5, text: "Mauna Kea was fun" },
			{ userId: 2, climbId: "3", rating: 4, text: "Evans a long climb" },
			{ userId: 2, climbId: "1", rating: 5, text: "Pikes long and hard" }
		]
	},
	{
		id: 3,
		name: "Peter",
		email: "peter@gmail.com",
		comments: [
			{ userId: 3, climbId: "4", rating: 4, text: "Brutal Zoncolan" },
			{ userId: 3, climbId: "5", rating: 5, text: "Lemmon was great" }
		]
	}
];

const CommentType = new GraphQLObjectType({
	name: "Comment",
	// this is wrapped in a function to avoid throwing error when it reaches "UserType" (which is defined below)
	fields: () => ({
		userId: { type: GraphQLID },
		user: {
			type: UserType,
			resolve: (parent, args) => {
				// return fakeUsers.map((user) => user.comments).filter((comment) => comment.userId === parent.userId);
				return fakeUsers.find((user) => user.id === parent.userId);
			}
		},
		climbId: { type: GraphQLID },
		rating: { type: GraphQLFloat },
		text: { type: GraphQLString }
	})
});

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		// TODO non-nullable?
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		comments: { type: new GraphQLList(CommentType) }
	})
});

// TODO bring user ratings and comments in
// TODO add description field (when admins type it on client)
const ClimbType = new GraphQLObjectType({
	name: "Climb",
	fields: () => ({
		id: { type: GraphQLID },
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
		isAvailable: { type: GraphQLBoolean },
		comments: {
			type: new GraphQLList(CommentType),
			// NOTE: parent here is the climb, so parent.id would be this climb's id (i.e., the climb we're using in this resolve function)
			resolve: (parent, args) => {
				console.log("parent", parent);
				return fakeUsers.reduce((commentList, nextUser) => {
					const commentMatch = nextUser.comments.find((comment) => comment.climbId === parent.id);
					if (commentMatch) {
						commentList.push(commentMatch);
					}
					return commentList;
				}, []);
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		climb: {
			type: ClimbType,
			// id will be used to retrieve specific climb
			args: { id: { type: GraphQLString } },
			// TODO add async?
			resolve: (parent, args) => {
				// get data from DB/other source
				return fakeClimbs.find((climb) => climb.id === args.id);
			}
		},
		climbs: {
			type: new GraphQLList(ClimbType),
			// TODO add async?
			resolve: () => {
				return fakeClimbs;
			}
		},
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve: (parent, { id }) => {
				return fakeUsers.find((user) => user.id === id);
			}
		},
		users: {
			type: new GraphQLList(UserType),
			// TODO add async?
			resolve: () => {
				return fakeUsers;
			}
		},
		comments: {
			type: new GraphQLList(CommentType),
			resolve: () => {
				// return fakeUsers.reduce((comments, nextUser) => {
				// 	comments.push(nextUser.comments);
				// 	return comments;
				// }, []);
				// console.log("fakeUsers: ", fakeUsers.map((user) => user.comments));
				return fakeUsers
					.map((user) => user.comments)
					.reduce((finalComments, nextArr) => finalComments.concat(nextArr), []);
			}
		},
		commentsByUser: {
			type: new GraphQLList(CommentType),
			args: { id: { type: GraphQLID } },
			resolve: (parent, { id }) => {
				// this is array of comments inside an array:
				const allComments = fakeUsers.reduce((finalComments, nextUser) => {
					return finalComments.concat(nextUser.comments);
				}, []);
				// NOTE: need +id to make it a number, since userId is type Number
				const match = allComments.filter((comment) => comment.userId === +id);
				return match;
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addClimb: {
			type: ClimbType,
			args: {
				name: { type: GraphQLString },
				location: { type: GraphQLString },
				latitude: { type: GraphQLFloat },
				longitude: { type: GraphQLFloat },
				altitude: { type: GraphQLFloat },
				rating: { type: GraphQLFloat },
				price: { type: GraphQLFloat },
				distance: { type: GraphQLFloat },
				avgGrade: { type: GraphQLFloat },
				guide: { type: GraphQLString },
				// TODO image, comments
				isAvailable: { type: GraphQLBoolean }
			},
			resolve: (parent, args) => {
				// TODO handle avgGrade, rating, isAvailable
				const { name, altitude, avgGrade, location, latitude, longitude, price, distance, guide, image } = args;

				let climb = new Climb({
					name,
					altitude,
					avgGrade,
					location,
					latitude,
					longitude,
					price,
					distance,
					guide,
					isAvailable: true,
					image
				});

				// return climb.save().then((res) => console.log("res: ", res)).catch((err) => console.log("err: ", err));
				return climb.save();
			}
		},

		// mutation {
		// 	addClimb(name:"Scanuppia", altitude:4865, avgGrade:17.8, location:"Italy",
		// 	latitude:46.1327695, longitude:8.3983191, price: 697.9, distance:4.5,guide:"Thomas",isAvailable:true) {
		// 	  name,
		// 	  altitude
		// 	}
		//   }

		addComment: {
			type: CommentType,
			args: {
				userId: { type: GraphQLID },
				user: { type: UserType },
				climbId: { type: GraphQLID },
				rating: { type: GraphQLFloat },
				text: { type: GraphQLString }
			},
			resolve: (parent, { userId, user, climbId, rating, text }) => {
				let comment = new Comment({
					userId,
					user,
					climbId,
					rating,
					text
				});
				// return comment.save();
			}
		}
		// addUser: {
		// 	type: UserType
		// }
	}
});

// climb needs: name, location, rating, lat/lng, price, distance, avg. grade
// dates offered, guide, image, sold-out
const climbSchema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});

module.exports = climbSchema;
