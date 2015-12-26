var NavBarView = Backbone.View.extend({
  
  el: '#navbar-container',
  initialize: function() {
    this.render();
  },



  render: function() {
  	var html = [
  		'<div class="navbar"><img class="navbar-logo" src="assets/hr-logo.png"></img><ul class="navbar"><li><a class="navbar-link" href=#/cohort/36>36</a></li><li><a class="navbar-link" href=#/cohort/37>37</a></li><ul></div>'
  	].join();
  	return this.$el.html(html);
  }

});

