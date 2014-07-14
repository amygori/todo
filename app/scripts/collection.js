//collections
var app = {};

(function () {
	var Tasks = Backbone.Collection.extend({
		model: app.Task,
		url: "http://tiny-pizza-server.herokuapp.com/collections/examples"
	});

//create global collection of tasks
	app.tasks = new Tasks();
})();
