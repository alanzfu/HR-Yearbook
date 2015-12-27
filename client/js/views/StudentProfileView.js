var StudentProfileView = Backbone.View.extend({
	el: '#page-content-container',

	initialize: function(){

		this.input = new MessageInputView({model: this.model});

		this.wallView = new WallView({collection: new Wall({studentId: this.model.get('id')})}); 

		this.model.on('profile loaded', this.render, this);
	},

	render: function(){
		var userInfoHtml = [
			'<img src="',
				this.model.get('image'),
			'"></img>',
			'<h3>',
				this.model.get('name'),
			'</h3>',
		].join('');
		this.$el.html(userInfoHtml);
		this.$el.append([
			this.input.$el,
			this.wallView.$el
		])
		return this;
	}
});