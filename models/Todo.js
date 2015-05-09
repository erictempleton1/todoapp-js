var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    name: String,
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', TodoSchema);