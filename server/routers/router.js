// http://expressjs.com/en/guide/routing.html
var router = require('express').Router();
var messageController = require('../controllers/messageController.js');
var Message = require('../models/Message.js');

router.route('/')
  .get(function(req, res) {
    console.log('get received');
    // or i can just give all of them back and filter on client side
	Message.find({}, function(err, result){
  		if(err){
  			console.log('get failed', err);
  			return;
  		}
  		console.log('queried and created',result);
		res.send(result);
	})
  })
  .post(function(req, res){
  	console.log('post received');
  	var data = req.body;
  	console.log('data before being pushed into message', data)
  	Message.create(data, function(err, result){
  		if(err){
  			console.log('post failed', err);
  			return;
  		}
  		
  		res.send('post success!')
  	})
  });

module.exports = router;