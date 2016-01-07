var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

var postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	}
})

var Post = mongoose.model('Post', postSchema);

module.exports = {
    Post: Post
};