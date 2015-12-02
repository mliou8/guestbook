var express = require('express')
var router = express.Router();
module.exports = router;



router.post('/submit', function (req, res, next) {
	    var newPage = {
            title: req.body,
            contents: 'hey now youre an allstar'
        };
	res.send('post request');
});
