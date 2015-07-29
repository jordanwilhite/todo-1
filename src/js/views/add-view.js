var Todo = Todo || {};

(function() {
  'use strict';

  Todo.AddView = Backbone.View.extend({
    template: _.template($('#addView').html()),

    events: {
      'keypress #new-todo': 'onEnterPress'
    },

    render: function() {
      return this.$el.html(this.template());
    },

    onEnterPress: function(event){
      var ENTER_KEY = 13;

      // Listens for the enter key to be pressed
      if (event.keyCode === ENTER_KEY) {
        var $input = this.$('#new-todo');
        var text = $input.val();

        // Reset the text
        $input.val('');

        // Add the new model to the todos collection
        Todo.TodosCollection.add({
          title: text
        });
      }
    }
  });
}());
