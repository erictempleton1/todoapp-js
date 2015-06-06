var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');


// GET todos listing
router.get('/', function(req, res, next) {
    Todo.find({created_by: req.user.username}, function(err, todos) {
        if (req.isAuthenticated())
            res.render('show_all.ejs', {
                todos: todos
            })
        else
            res.redirect('/accounts/login')
    });
});

// Delete todo
router.delete('/:id', function(req, res, next) {
    //Todo.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    Todo.remove({
        _id: req.params.id,
        created_by: req.user.username
    }, function(err, todo_item) {
        if (err)
            return next(err);
        else
            return res.redirect('/todos');
    });
});


module.exports = router;