var express = require('express')
var router = express.Router();
var models = require('../models');
var Post = models.Post;
module.exports = router;


router.get('/viewall', function (req, res, next) {
        console.log("router hit")
    Post.find({})
    .then(function (data) {
        res.json(data);
    })


});


router.post('/submit', function (req, res, next) {
		//allows you to post a new page
	    // var newPost = new Post({
	    // 	comment: req.body.comment,
	    // 	name: req.body.name
     //    });
     //    newPost.save()
     Post.create({
        name: req.body.name,
        comment: req.body.comment
     })
        .then(function (newPost) {
	       res.send(newPost);
        }).then(null, function(err) {
        	console.log(err);
        })
});