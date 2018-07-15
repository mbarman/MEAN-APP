var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    category: String,
    userId: String,
    password: String,
    dateAdded: Date
});

userSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', userSchema);

module.exports = User;

//OR  module.exports = mongoose.model('Item', itemSchema);