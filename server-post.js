var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
// require predeine user module
var Post     = require('./post');

//cal  mongoose and connect mongodb
var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds056789.mlab.com:56789/dev');

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
    Post.find(function(err,users) {
        if(err) {
            console.log(err)
        } else {
            res.json(users);
        }
    });
});

//get the user by id
router.get('/getone/:id',function(req,res) {
    Post.findById(req.params.id,function(err,user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});

//insert a user, right now teacher said this one is leave to optional,so I haven't implement a submit form yet to create users
router.post('/insertone',function(req,res) {
    var post = new Post();
    post.userId = req.params.userId;
    post.created_at = req.params.created_at;
    post.save(function(err) {
        if(err) {
            console.log(err)
        }
        res.json({message: 'created a post'})
    });
});

//delete the user by id
router.delete('/deleteone/:id',function(req,res) {
    Post.findByIdAndDelete(req.params.id, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.send('successfully deleted');
        }
    });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/app/posts', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);