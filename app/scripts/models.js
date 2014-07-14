//models

var Task = Backbone.Model.extend({
	defaults: function() {
		return {
		title: "",
		done: false,
		//order: Tasks.nextOrder(),
		}
	},
	urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/blargh",
	idAttribute: '_id'
});

var task = new Task({title: $("newTask").val()});
task.save();
