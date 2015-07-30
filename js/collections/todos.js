'use strict';

var Todo = Todo || {};

(function () {
  'use strict';

  Todo.TodosCollection = Backbone.Collection.extend({
    model: Todo.TodoModel
  });
})();