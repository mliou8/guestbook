var express = require('express')
var router = express.Router();
module.exports = router;

router.get('/', function (req, res, next) {

});


router.get('/display', function (req, res, next) {
	res.send("DISPLAY")
});


router.post('/submit', function (req, res, next) {
	    var newPage = {
            title: req.body,
            contents: 'hey now youre an allstar'
        };
	res.send('post request');
});
