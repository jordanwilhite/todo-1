var Todo = Todo || {};

(function() {
  'use strict';

  Todo.ListView = Backbone.View.extend({
    template: _.template($('#listView').html()),

    tagName: 'ul',

    initialize: function(){
      this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
      return this.$el.html(this.template({
        todos: this.collection.toJSON()
      }));
    }
  });
}());
