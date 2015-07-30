'use strict';

var Todo = Todo || {};

(function () {
  'use strict';

  Todo.TodoView = Backbone.View.extend({
    template: _.template($('#todoView').html()),

    tagName: 'li',

    events: {
      'click .destroy': 'onDestroy',
      'dblclick label': 'onEdit',
      'blur .edit': 'onClose',
      'keydown .edit': 'onEscape',
      'keyup .edit': 'onEnter'
    },

    initialize: function initialize() {
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'change:title', this.render);
    },

    render: function render() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    onDestroy: function onDestroy(event) {
      if (confirm('Are you sure you want to delete ' + this.model.get('title') + '?')) {
        this.model.destroy();
      }
    },

    onEdit: function onEdit() {
      this.$el.addClass('editing');
    },

    onClose: function onClose() {
      var $edit = this.$('.edit');
      var title = $edit.val();
      var trimmedTitle = title.trim();

      if (trimmedTitle) {
        this.model.set({
          title: trimmedTitle
        });

        $edit.val(this.model.get('title'));
      } else {
        this.onDestroy();
      }

      this.$el.removeClass('editing');
    },

    onEscape: function onEscape(event) {
      var ESC_KEY = 27;
      if (event.keyCode === ESC_KEY) {
        var $edit = $(event.target);
        $edit.val(this.model.get('title'));
        this.onClose();
      }
    },

    onEnter: function onEnter(event) {
      var ENTER_KEY = 13;

      if (event.keyCode === ENTER_KEY) {
        this.onClose();
      }
    }
  });
})();