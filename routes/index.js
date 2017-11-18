var express = require('express');
var router = express.Router();
//var fetch = require('node-fetch');
var mongoose = require('mongoose');
var mongoUrl = 'mongodb://gib:qwerty@ds245805.mlab.com:45805/heroku_dt4zfk5h';

mongoose.Promise = global.Promise
mongoose.connect(mongoUrl, { useMongoClient: true });
//var db = mongoose.connection;

var eventSchema = mongoose.Schema({
  //id: Number,
  name: String,
  description: String,
  game: String,
  city: String,
  date: String,
  rating: Number
});

var Event = mongoose.model('Event', eventSchema);

/*var petro = new Student({
  firstName: 'Петро',
  lastName: 'Петровський'
});

petro
  .save()
  .then(function() {
    console.log('Запис створено');
  });*/

/* GET home page. */

//router.route('api/events')
router.get('/api/events', function(req, res, next){

		var query = {};
		if(req.query.game){
			query["game"] = req.query.game;
		}
		if(req.query.city){
			query["city"] = req.query.city;
		}
		var options = {};
		if(req.query.order_by){
			query["game"] = req.query.game;
		}
		if(req.query.city){
			query["city"] = req.query.city;
		}
		//console.log(findObj);
		Event.find(findObj)
	  	.then(function(events) {
	  		console.log(events);
	    	req.send(events)
		}).catch(function(e) {
	  		res.send(e);
		});

  	})
router.get('/api/topevents', function(req, res, next){

		//var query = {};
		//if(req.query.game){
		//	query["count"] = req.query.game;
		//}
		Event.find().sort({rating: -1}).limit(req.query.count ? req.query.count : 10)
	  	.then(function(events) {
	  		console.log(events);
	    	res.send("OK")
		}).catch(function(e) {
			console.log("error");
			console.log(e);
	  		res.send(e);
		});

  	})
router.post('/api/events', function(req, res, next){
	  	var event = new Event({
			  name: req.body.name,
			  description: req.body.description,
			  game: req.body.game,
			  city: req.body.city,
			  date: req.body.date,
			  rating: 0
		});

			event
			  .save()
			  .then(function() {
			  	res.send("OK");
			    //console.log('Event added');
			}).catch(function(e) {
				res.send(e);
		});
	});
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;