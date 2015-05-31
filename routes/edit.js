var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

// todo: restrict edit to logged in creator is


// GET by id
router.get('/:id', function(req, res, next) {
    //Todo.findById(req.params.id, function(err, todo_item) {
    Todo.findOne({
        _id: req.params.id,
        created_by: req.user.username
    }, function(err, todo_item) {
        if (err)
            return next(err);
        else
            res.render('edit.ejs', {
                todo_item: todo_item
        });
    });
});

// Update todo
router.put('/:id', function(req, res, next) {
    //Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    Todo.findOne({
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