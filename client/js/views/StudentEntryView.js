var StudentEntryView = Backbone.View.extend({
	tagName: 'div',

	initialize: function(){
		this.render();
	},

	template: _.template('<img src="<%= image %>"</img><h3><%= name %></h3><h4><%= nickname%></h4>'),

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}

});