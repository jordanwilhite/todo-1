'use strict';

import AppView from './views/app-view';

var Todo = Todo || {};
(function() {

  var app = new AppView();
  app.render();

  Todo.app = app;
}());
