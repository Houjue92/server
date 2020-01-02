var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
// require predeine user module
var wUser     = require('./wUser');

//cal  mongoose and connect mongodb
var mongoose   = require('mongoose');
mongoose.connect('mongodb://houjue:Qw920524@ds249717.mlab.com:49717/wechat');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

//define our Resful API
// get all users
router.get('/getall',function(req,res) {
    Wuser.find(function(err,users) {
        if(err) {
            console.log(err)
        } else {
            res.json(users);
        }
    });
});

//get the user by id
router.get('/getone/:id',function(req,res) {
    Wuser.findById(req.params.id,function(err,user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});

//insert a user, right now teacher said this one is leave to optional,so I haven't implement a submit form yet to create users
router.post('/insertone',function(req,res) {
    var user = new User();
    user.name = req.params.name;
    user.age = req.params.age;
    user.sex = req.params.sex;
    user.titile = req.params.titile;
    user.start_Date = req.params.start_Date;
    Wuser.save(function(err) {
        if(err) {
            console.log(err)
        }
        res.json({message: 'created a user'})
    });
});
// put route

//delete the user by id
router.delete('/deleteone/:id',function(req,res) {
    Wuser.findByIdAndDelete(req.params.id, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.send('successfully deleted');
        }
    });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/app/wUsers', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);