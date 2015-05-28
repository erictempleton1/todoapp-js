var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    created_by: { type: Schema.Types.ObjectId, ref: 'Account', required: true},
    name: String,
    completed: { type: Boolean, default: false },
    added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);