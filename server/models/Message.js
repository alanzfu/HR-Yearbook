// http://mongoosejs.com/docs/guide.html
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

var messageSchema = new mongoose.Schema({
  author: String,
  text: String,
});


module.exports = mongoose.model('Message', messageSchema);