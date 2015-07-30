'use strict';

var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

export default TodoModel;
