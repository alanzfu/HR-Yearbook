var MessageInputView = Backbone.View.extend({

  tagName: 'input',

  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  keyAction: function(e) {
  	console.log('anything');
    var isEnterKey = (e.which === 13);

    if(isEnterKey) {
      var message = $('textarea').val();
      var messageContent = {
        id : this.model.get('id'),
        message: message
      };
      $.post('http://127.0.0.1:3000/api', messageContent);
      this.resetInput();
    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'What\'s up?'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});