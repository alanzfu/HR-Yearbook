var StudentEntryView = Backbone.View.extend({
	tagName: 'div',

	initialize: function(){
		this.render();

	},

	events: {
		"mouseover": "hoverTrigger",
		"mouseout": "hoverExitTrigger"
	},

	hoverTrigger: function(e){
		this.model.hoverTrigger();
	},
	hoverExitTrigger: function(e){
		this.model.hoverExitTrigger();
	},

	template: _.template('<img src="<%= image %>"</img><br><a href="#/student/<%=id %>"><%= name %></a>'),

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}

});