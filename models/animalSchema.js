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


const animalType = new GraphQLObjectType({
  query: new GraphQLObjectType({
    name: 'animal',
    description: 'Animal name and species',
    fields: () => ({
      id: {type: GraphQLID},
      animalName: {type: GraphQLString},
      species: {type: speciesType,
        resolve(parent, args) {
          console.log(parent);
          return speciesData.find(spe => spe.id === parent.species);
        }
      },

    }),
  })

});

module.exports = mongoose.model("AnimalType", animalType);

/!*module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});*!/
*/
