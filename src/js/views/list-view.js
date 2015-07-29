var Todo = Todo || {};

(function() {
  'use strict';

  Todo.ListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'all', function(){
        // console.log(arguments);
      });
    },

    addAll: function() {
      this.collection.each(function(todo) {
        this.addOne(todo);
      }, this);
    },

    addOne: function(todo){
      var view = new Todo.TodoView({model: todo});
      this.$el.append(view.render().el);

    },

    render: function() {
      return this;
    }
  });
}());
