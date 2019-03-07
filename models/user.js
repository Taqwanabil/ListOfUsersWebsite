const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: "string",
    age: "number"
})

const userModel = mongoose.model('user', userSchema);  //alaias for collection 

module.exports = userModel;