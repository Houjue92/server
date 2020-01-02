const mongoose   = require('mongoose');

// connect
mongoose.connect('mongodb://admin:admin@ds056789.mlab.com:56789/dev');

// get persistent class
const User     = require('./user');

// get an instanc in a collection by id: Bear
let id = '5dda04676631743190cfc731';
User.findById(id, (err, user) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log(user);
	}
});