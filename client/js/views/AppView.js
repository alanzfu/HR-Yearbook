var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {


    options.router.on('route:landing', function() {
      console.log('Hit landing Route');
      this.renderLanding();
    }.bind(this));

    options.router.on('route:student', function(id) {
      console.log('Student Routing', id);
    }.bind(this));

    options.router.on('route:cohort', function(num) {
      this.renderCohort(num);
    }.bind(this));


  },

  renderCohort: function(cohort) {
    $('#page-content-container').html(new StudentsView({collection: new Students({cohort: cohort})}).render());   
  },

  renderStudentPage: function(studentId){
    $('#page-content-container').html(new LandingView().render());    
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());   
  }

});