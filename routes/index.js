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
  rating: Number,
  peacture: String,
  link: String
});

var Event = mongoose.model('Event', eventSchema);

var commentSchema = mongoose.Schema({
	user: String,
	event_id: String,
	body: String
});
var Comment = mongoose.model('Cooment', commentSchema);

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
		Event.find(query).sort({rating: -1})
	  	.then(function(events) {
	  		//console.log("GetEvents");
	  		console.log(events);
	    	res.send(events)
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
	    	res.send(events)
		}).catch(function(e) {
			console.log("error");
			console.log(e);
	  		res.send(e);
		});

  	});
router.post('/api/events', function(req, res, next){
		var event = new Event({
			  name: req.body.name,
			  description: req.body.description,
			  game: req.body.game,
			  city: req.body.city,
			  date: req.body.date,
			  rating: 0,
			  peacture: req.body.peacture,
			  link: req.body.link
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
router.put('/api/events/:id', function(req, res){
			console.log(req.body);
			Event.findById(req.params.id)
			.then(function(event) {
				if(req.body.vote){
					if(req.body.vote == "+"){
	  					event.rating += 1;
					}
	  				if(req.body.vote == "-"){
	  					event.rating -= 1;
	  				}

			  		event
					  .save()
					  .then(function() {
					  	res.send("OK");
					}).catch(function(e) {
						res.send(e);
					});
					
				}
			}).catch(function(e) {
	  			res.send(e);
			});
			
			//res.send("OK");
});
router.get('/api/events/:event_id', function(req, res, next){
		console.log("Get comments " + req.params.event_id);
	  	Event.findOne({_id: req.params.event_id})
	  	.then(function(event) {
	  		Comment.find({event_id: req.params.event_id})
	  		.then(function(comments) {
	  			console.log({event: event, comments: comments});
	  			res.send({event: event, comments: comments});
	  		}).catch(function(e) {
	  			console.log(e);
	  			res.send(e);
		});
		}).catch(function(e) {
			console.log("error");
			console.log(e);
	  		res.send(e);
		});
	});
router.post('/api/events/:event_id/comments', function(req, res, next){
		console.log("comment add");
		console.log(req.body);
	  	var comment = new Comment({
			user: req.body.user,
			event_id: req.params.event_id,
			body: req.body.body
		});

			comment
			  .save()
			  .then(function() {
			  	res.send("OK");
			}).catch(function(e) {
				res.send(e);
		});
	});
router.get('/api/events/:event_id/comments', function(req, res, next){
		Comment.find({event_id: req.params.event_id})
	  	.then(function(comments) {
	  		console.log(comments);
	    	res.send(comments);
		}).catch(function(e) {
			console.log("error");
			console.log(e);
	  		res.send(e);
		});

  	})

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;