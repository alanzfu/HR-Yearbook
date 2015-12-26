// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'student/:id': 'student',
    'cohort/:num': 'cohort' //to be continued
  },

  landing: function() {
  	console.log('landing from app router')
  },

});