var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

// todo: restrict edit to logged in creator of item


// GET by id
router.get('/:id', function(req, res, next) {
    Todo.findOne({created_by: req.user.username})
    .populate('name')
    .exec(function(err, todo_item) {
        if (err)
            return next(err);
        else
            return res.render('edit.ejs', todo_item);
    });
});

// Update todo
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err)
            return next(err);
        else
            return res.redirect('/todos');
    });
});


module.exports = router;