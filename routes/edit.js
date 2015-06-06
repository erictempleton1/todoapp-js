var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');


// GET by id
router.get('/:id', function(req, res, next) {
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
    Todo.findOne({
        _id: req.params.id,
        created_by: req.user.username
    }, function(err, todo_item) {
        if (err)
            return next(err);
        else
            todo_item.name = req.body.name;
            todo_item.save(function(err) {
                if (err) 
                    return next(err);
            return res.redirect('/todos');
        });
    });
});


module.exports = router;