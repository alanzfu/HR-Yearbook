var ExtraStudentView = Backbone.View.extend({
	el: '<div>' ,

	initialize: function(){
		this.model.on('hovering', this.displayEl, this);
		this.model.on('exit', this.hideEl, this)
	},
	
	render: function(){
		return this.$el.html('<p>'+ this.model.get('nickname')+'</p>')
	},

	displayEl: function(){
		this.$el.show();
	},
	hideEl: function(){
		this.$el.hide();
	}
});