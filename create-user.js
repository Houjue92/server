const mongoose   = require('mongoose');

// connect
mongoose.connect('mongodb://admin:admin@ds056789.mlab.com:56789/dev');

// get persistent class
const User     = require('./user');

// create a new instance: user        
var user = new User();  
user.name = 'Houjue';
user.age = 18;
user.sex = 'm';
user.title = 'software engineer'
user.start_Date = new Date();
user.save(function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log('User created!');
		User.find(function(err, users) {
			if (err) {
				console.log(err);
			}
			else {
				console.log(users);
			}
		});
	}
});