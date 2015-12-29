var StudentProfileView = Backbone.View.extend({
	el: '#page-content-container',

	initialize: function(){ 

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
		this.$el.append(new MessageInputView({model: this.model}).el);
		this.$el.append(new WallView({collection: new Wall({studentId: this.model.get('id')})}).el);
		return this;
	}
});