var StudentProfileView = Backbone.View.extend({
	el: '#page-content-container',

	initialize: function(){
		this.render();
		this.model.on('profile loaded', this.render, this);
	},

	render: function(){

		var wallId = this.model.get('id');
		console.log(this.model.attributes);
		var messageInput = new MessageInputView({model: this.model}).render();
		var wallView = new WallView({collection: new Wall({studentId: wallId})}).render();
		var userInfoHtml = [
			'<div class="row">',
				'<div class="col-sm-5">',
					'<img src="',
						this.model.get('image'),
					'"></img>',
					'<h3>',
						this.model.get('name'),
					'</h3>',

				'</div>',
				'<div class="col-sm-7"',
					'<div class="row">',
						messageInput,
					'</div>',
					'<div class="row">',
						wallView,
					'</div>',
				'</div>',
			'</div>'
		].join('');
		console.log(userInfoHtml);
		return this.$el.html(userInfoHtml);
	}
});