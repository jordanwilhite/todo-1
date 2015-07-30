'use strict';

import AppView from './views/app-view';

var Todo = window.Todo = window.Todo || {};

(function() {

  var app = new AppView();
  app.render();

  Todo.app = app;
}());
