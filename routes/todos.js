var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');


router.get('/', function(req, res, next) {
    Todo.find({created_by: req.user.username}, function(err, todos) {
        if (req.isAuthenticated())
            res.render('todos.ejs', {
                todos: todos
            });
        else
            res.redirect('/accounts/login')
    });
});


// Create todo
router.post('/', function(req, res, next) {
    Todo.create({
        name: req.body.name,
        created_by: req.user.username
    }, function(err, post) {
        if (err)
            return next(err);
        else
            return res.redirect('/todos');
    });
});

// Delete todo
router.delete('/:id', function(req, res, next) {
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

// notes- check that completed submit works correctly