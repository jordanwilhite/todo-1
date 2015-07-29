var Todo = Todo || {};

(function() {
  'use strict';

  var Todos = Backbone.Collection.extend({
    model: Todo.TodoModel
  });

  Todo.TodosCollection = new Todos();
}());
