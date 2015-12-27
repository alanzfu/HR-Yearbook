var StudentProfileView = Backbone.View.extend({
	el: '#page-content-container',

	initialize: function(){
		this.render();
	},

	render: function(){
		var userInfoHtml = [''].join();
		this.$el.append([
			userInfoHtml,
			//wall collection
		]);
		return this.$el.html(userInfoHtml);
	}
})