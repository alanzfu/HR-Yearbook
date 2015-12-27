var Wall = Backbone.Collection.extend({
	model: WallEntry,

	initialize: function(options){
		this.populateWall(options.studentId);
	},

	populateWall: function(studentId){

		$.get("http://127.0.0.1:3000/api", function(results){
			var filteredMessages = _.filter(results, function(message){
				if(message.id === studentId) {
					return true;
				} else {
					return false;
				}
			});
			this.reset();
			this.add(filteredMessages);
		}.bind(this));
	}

});