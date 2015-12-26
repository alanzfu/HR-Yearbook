var LandingView = Backbone.View.extend({

  el: '#page-content-container',

  initialize: function() {
    this.render();
  },

  render: function() {
  	return this.$el.html('<img src=http://bit.ly/1J9H9w6></img>');
  }

});
