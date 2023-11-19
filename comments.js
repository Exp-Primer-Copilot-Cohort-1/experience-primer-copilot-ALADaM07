// Create web server 
// 1. Get all comments
// 2. Get comment by id
// 3. Create new comment
// 4. Update comment by id
// 5. Delete comment by id

var express = require("express");
var router = express.Router();
var Comment = require("../models/comment");
var mongoose = require("mongoose");

// 1. Get all comments
router.get("/", function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

// 2. Get comment by id
router.get("/:id", function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    });
});

// 3. Create new comment
router.post("/", function(req, res) {
    var newComment = new Comment({
        _id: new mongoose.Types.ObjectId(),
// Import modules     
const express = require('express');
const router = express.Router();
