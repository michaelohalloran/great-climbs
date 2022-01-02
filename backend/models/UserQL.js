const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLFloat } = require("graphql");

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
			{ userId: 3, climbId: "1", rating: 4, text: "Evans a long climb" }
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
	fields: () => ({
		userId: { type: GraphQLID },
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

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
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
		}
	}
});

const userSchema = new GraphQLSchema({
	query: RootQuery
});
module.exports = userSchema;
