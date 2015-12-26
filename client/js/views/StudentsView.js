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
		var studentView = new StudentEntryView({model: student}).render().addClass('student-div').append(new ExtraStudentView({model: student}).render().addClass('extra-hover-info').hide());
		return studentView;
	}));
  }

});