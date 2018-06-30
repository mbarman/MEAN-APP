var mongoose = require('mongoose');
var mongoose_paginate = require('mongoose-paginate');

var itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  dateAdded: Date
});

itemSchema.plugin(mongoose_paginate);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

//OR  module.exports = mongoose.model('Item', itemSchema);