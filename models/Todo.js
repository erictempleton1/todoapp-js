var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    created_by: String,
    name: String,
    completed: { type: Boolean, default: false },
    added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);