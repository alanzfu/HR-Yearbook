var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.populateCohort();
  },
  populateCohort: function(callback) {
  	var that = this;
  	this.fetch({
  		reset: true,
  		success:function(result){
  			if(callback){
  				callback(result);	
  			}
  			console.log('loading');
  			that.trigger('loading');
  		}, 
  		error: function(error){
  			console.log('populateCohort error', error);
  		},
  		complete: function(result){
  			//console.log('complete');
  		}
  	}).done(function(){
  		console.log('done');
  		that.trigger('complete');
  	});
  }
});