/*
const {GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull}
  = require('graphql');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const categoryType = new GraphQLObjectType({
  name: 'category',
  description: 'Animal category',
  fields: () => ({
    id: {type: GraphQLID},
    categoryName: {type: GraphQLString},
  }),
});

/!*
module.exports = mongoose.model("AnimalType", categoryType);
*!/


module.exports = new GraphQLSchema({
  type: categoryType,
});
*/
