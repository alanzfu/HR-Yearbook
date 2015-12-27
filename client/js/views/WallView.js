var WallView = Backbone.View.extend({
	el: '<div>',

	initialize: function(){
		this.render();
		this.collection.on('change', this.render, this);
	},

	events: {
		'click #refresh button': 'render'
	},

	render: function(){
		this.$el.html('<button id="refresh">Refresh Wall</button>')
		return this.$el.append(this.collection.map(function(wallEntry){
			return new WallEntryView({model: wallEntry});
		}));
	}
});