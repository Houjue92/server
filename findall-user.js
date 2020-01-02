const mongoose   = require('mongoose');

// connect
mongoose.connect('mongodb://admin:admin@ds056789.mlab.com:56789/dev');

// get persistent class
const User     = require('./user');

// get all instances in a collection: User
User.find((err, users) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log(users);
	}
});