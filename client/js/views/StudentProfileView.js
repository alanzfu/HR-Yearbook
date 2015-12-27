var StudentProfileView = Backbone.View.extend({
	el: '#page-content-container',

	initialize: function(){
		this.model.on('profile loaded', this.render, this);
	},

	render: function(){

		var wallId = this.model.get('id');
		
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
						messageInput.html(),
					'</div>',
					'<div class="row">',
						wallView.html(),
					'</div>',
				'</div>',
			'</div>'
		].join('');
		return this.$el.html(userInfoHtml);
	}
});