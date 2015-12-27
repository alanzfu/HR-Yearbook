var MessageInputView = Backbone.View.extend({
	el: '<div>',

	initialize: function(){
		this.render();
	},

	events:{
		'click button': 'submitMessage'
	},

	submitMessage: function(){
		var message = $('textarea').val();
		$.post('http://127.0.0.1:3000/api', {
			id : this.model.get('id'),
			message: message
		});
	},

	render: function(){
		var html = [
			'<textarea placeholder="What\'s up?"></textarea>',
			'<button>Post</button>'
		].join();
		return this.$el.html(html);
	}


})