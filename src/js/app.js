var Todo = Todo || {};

(function() {
  'use strict';

  var app = new Todo.AppView();
  Todo.app = app;
  app.render();
}());
