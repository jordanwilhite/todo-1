'use strict';

var Todo = Todo || {};

(function () {
  'use strict';

  Todo.AppView = Backbone.View.extend({
    el: '#todo-app',

    initialize: function initialize() {
      var todos = new Todo.TodosCollection();
      this.addView = new Todo.AddView({
        collection: todos
      });
      this.listView = new Todo.ListView({
        collection: todos
      });
    },

    render: function render() {
      this.addView.render();
      this.listView.render();

      this.$('header').append(this.addView.el);
      this.$('main').html(this.listView.el);
    }
  });
})();