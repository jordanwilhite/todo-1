import TodoModel from '../models/todo';

var TodosCollection = Backbone.Collection.extend({
  model: TodoModel
});

export default TodosCollection;
