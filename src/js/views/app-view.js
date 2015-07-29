var Todo = Todo || {};

(function() {
  'use strict';

  Todo.AppView = Backbone.View.extend({
    el: '#todo-app',

    initialize: function(){
      this.addView = new Todo.AddView();
      this.listView = new Todo.ListView({
        collection: Todo.TodosCollection
      });
    },

    render: function() {
      this.$('header').html(this.addView.render());
      this.$('main').html(this.listView.render());
    }
  });
}());
