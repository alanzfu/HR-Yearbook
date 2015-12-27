var Wall = Backbone.Collection.extend({
	model: WallEntry,

	initialize: function(options){
		this.populateWall(options.studentId);
	},

	populateWall: function(studentId){
		console.log(studentId);
		// var wallEntryUrl = "http://www.google.com/" + studentId;
		// $.get(wallEntryUrl, function(results){
		// 	//should be a json of objects
		// 	//create models
		// 	//this.add({})
		// });
		//GET REQUEST TO MONGO-DB
	}

});