var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var AccountSchema = mongoose.Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', AccountSchema);
    