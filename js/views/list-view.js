'use strict';

var Todo = Todo || {};

(function () {
  'use strict';

  Todo.ListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function initialize() {
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'all', function () {
        // console.log(arguments);
      });
    },

    addAll: function addAll() {
      this.collection.each(function (todo) {
        this.addOne(todo);
      }, this);
    },

    addOne: function addOne(todo) {
      var view = new Todo.TodoView({ model: todo });
      this.$el.append(view.render().el);
    },

    render: function render() {
      return this;
    }
  });
})();