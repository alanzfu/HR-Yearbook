var Student = Backbone.Model.extend({

  initialize: function(options){
  	this.url = 'https://hr-yearbook.herokuapp.com/api/students?id=' + options.studentId;
  	this.set('nickname', generateNickname());
  	this.populateProfile(options);
  },
  
  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    nickname: generateNickname()
  },

  hoverTrigger: function(){
  	this.trigger('hovering');
  },
  hoverExitTrigger: function(){
  	this.trigger('exit')
  },

  populateProfile: function(options){
  	var that = this
  	console.log(that.url);
  	$.get(that.url, function(results){
  		if(results[0].id !== ''){
  			that.set('id', results[0].id);
  			that.set('cohort', results[0].cohort);
  			that.set('image', results[0].image);
  			that.set('name', results[0].name);
  			that.trigger('profile loaded');
  		}
  		
  	});
  	this.set('wall', new Wall(options));
  },

  wall: ''

});