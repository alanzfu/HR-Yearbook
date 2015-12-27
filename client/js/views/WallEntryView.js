var WallEntryView = Backbone.View.extend({
	
	el: '<div>',

	template: _.template('<p><%= message %></p>'),

	initialize: function(){
		this.render();
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});