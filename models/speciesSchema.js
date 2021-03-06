const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
  speciesName: String,
  category: [{type: Schema.Types.ObjectID, ref: "Category"}]
});

module.exports = mongoose.model("speciesSchema", speciesSchema);