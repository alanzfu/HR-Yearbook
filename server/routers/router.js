// http://expressjs.com/en/guide/routing.html
var router = require('express').Router();
var messageController = require('../controllers/messageController.js');

router.route('/')
  .get(function(req, res) {
    console.log('get received');
    res.send('get');
	// messageController.find(req, function(err, result){
 //  		if(err){
 //  			console.log('get failed', err);
 //  			return;
 //  		}
	// 	res.send('something with the results', result);
	// })
  })
  .post(function(req, res){
  	console.log('post received');
  	res.send('post');
  	// messageController.create(req, function(err, result){
  	// 	if(err){
  	// 		console.log('post failed', err);
  	// 		return;
  	// 	}
  	// 	res.send('post success!')
  	// })
  });

module.exports = router;