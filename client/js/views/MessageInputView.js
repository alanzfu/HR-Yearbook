var MessageInputView = Backbone.View.extend({

  // tagName: 'form',

  template: _.template('<form><input class="inputTest" placeholder="What\'s up?"></form>'),

  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.resetInput();
    this.$el.html(this.template());
    return this;
  },

  keyAction: function(e) {
    console.log('anything');
    var isEnterKey  = (e.which === 13);

    if (isEnterKey) {
        console.log('hit enter')
    //   // var message = $('textarea').val();
    //   // var messageContent = {
    //   //   id : this.model.get('id'),
    //   //   message: message
    //   // };
    //   // $.post('http://127.0.0.1:3000/api', messageContent);
    //   // this.resetInput();
    }

  },

  resetInput: function() {
    // this.$el.attr({
    //   placeholder: 'What\'s up?'
    // });
    this.clearInput();
  },

  clearInput: function() {
    $('.inputTest').val('')
  }

});