const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  animalName: String,
  species: [{type: Schema.Types.ObjectID, ref: 'Species'}]
});

module.exports = mongoose.model("animalSchema", animalSchema);

