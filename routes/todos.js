var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

// GET todos listing
router.get('/', function(req, res, next) {
    Todo.find(function (err, todos) {
        if (err)
            return next(err);
        else
            res.render('todos.ejs', {
                todos: todos
        });
    });
});

// Create todo
router.post('/', function(req, res, next) {
    Todo.create(req.body, function(err, post) {
        if (err)
            return next(err);
        else
            return res.json(post);
    });
});

// GET by id
router.get('/:id', function(req, res, next) {
    Todo.findById(req.params.id, function(err, post) {
        if (err)
            return next(err);
        else
            return res.json(post);
    });
});

// Update todo
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err)
            return next(err);
        else
            return res.json(post);
    });
});

// Delete todo
router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err)
            return next(err);
        else
            return res.redirect('/todos');
    });
});

// pass var test
router.get('/edit/:id', function(req, res) {
    var todo_id = req.params.id;
    res.send(todo_id);
});

module.exports = router;