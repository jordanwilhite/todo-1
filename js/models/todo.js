'use strict';

var Todo = Todo || {};

(function () {
  'use strict';

  Todo.TodoModel = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });
})();