var MessageInputView = Backbone.View.extend({
	el: '<div>',

	initialize: function(){
		this.render();
	},

	events:{
		'click #post': 'submitMessage'
	},

	submitMessage: function(){	
		var message = $('textarea').val();
		console.log('submit message called', message);
		var messageContent = {
			id : this.model.get('id'),
			message: message
		};
		console.log(messageContent);
		$.post('http://127.0.0.1:3000/api', messageContent);
	},

	render: function(){
		var html = [
			'<textarea placeholder="What\'s up?"></textarea>',
			'<button id="post">Post</button>'
		].join('');
		return this.$el.html(html);
	}


})