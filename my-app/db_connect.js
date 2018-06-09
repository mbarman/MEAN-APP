var mongoose = require('mongoose');
var url = require('./config/db_config').url;
var bluebird = require('bluebird')

mongoose.Promise = bluebird ;
mongoose.connect(url)
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : ${url}`)})
.catch((error)=> { console.log(error)})

module.exports = mongoose;