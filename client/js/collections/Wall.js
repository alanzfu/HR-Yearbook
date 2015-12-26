var Wall = Backbone.Collection.extend({
	model: WallEntry,

	initialize: function(options){
		this.populateWall(options.studentId);
	},

	populateWall: function(studentId){
		console.log(studentId);
		var wallEntryUrl = "" + studentId;
		$.get(wallEntryUrl, function(results){
			//should be a json of objects
			//create models
		})
		//GET REQUEST TO MONGO-DB
	}

});