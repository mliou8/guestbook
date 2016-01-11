var express = require('express')
var router = express.Router();
var models = require('../models');
var Post = models.Post;
module.exports = router;


router.get('/viewall', function (req, res, next) {
    Post.find({})
    .then(function (data) {
        res.json(data);
    })
});


router.post('/submit', function (req, res, next) {
    console.log(req.body.name);
     Post.create({
        name: req.body.name,
        comment: req.body.comment,
        color: req.body.color
     })
        .then(function (newPost) {
	       console.log("success function ", newPost)
           res.send(newPost);
        }).then(null, function(err) {
        	console.log(err);
        })
});