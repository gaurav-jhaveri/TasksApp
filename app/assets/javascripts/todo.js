window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function ($rootEl, tasks) {
    new TD.Routers.TasksRouter($rootEl, tasks);
    Backbone.history.start();
    });
    
    $rootEl.html(tasksListView.render().$el);
  }
};

TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function($rootEl, tasks) {
    this.$rootEl = $rootEl;
    this.tasks = tasks;
  },
  
  routes: {
    "": "index",
    "tasks/:id": "show"
  },
  
  index: function () {
    var that = this
    
    var tasksListView = new TD.Views.TasksListView({
      collection: that.tasks
    });
    
    that.$rootEl.html(tasksListView.render().$el);
    
    show: function (id) {
      console.log("I'm just getting warmed up!");
    }
  }
});