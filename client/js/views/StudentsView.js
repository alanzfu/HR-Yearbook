var StudentsView = Backbone.View.extend({

  el: '#page-content-container',

  initialize: function() {
    this.renderLoading();
    this.collection.on('complete', this.render, this);
  },

  renderLoading: function(){
  	spinnerInit();
  },

  render: function() {
	return this.$el.html(this.collection.map(function(student){
		return new StudentEntryView({model: student}).render().addClass('student-div');
	}));
  	//needs to create studentmodel views for all of the models within colleciton
  }

});