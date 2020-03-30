const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesType = new GraphQLObjectType({
  query: new GraphQLObjectType({

    name: 'species',
  description: 'Animal species',
  fields: () => ({
    id: {type: GraphQLID},
    speciesName: {type: GraphQLString},
    category: {
      type: categoryType,
      resolve(parent, args) {
        return categoryData.find(categ => categ.id === parent.category);
      }
    },
  }),
  }),
});

module.exports = mongoose.model("AnimalType", animalType);