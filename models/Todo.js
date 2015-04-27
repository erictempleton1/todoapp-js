var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    name: String,
    completed: Boolean,
});

module.exports = mongoose.model('Todo', TodoSchema);