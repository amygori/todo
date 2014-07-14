//collections
var app = app || {};

(function () {
	var Tasks = Backbone.Collection.extend({
		model: app.Task,
		url: "http://tiny-pizza-server.herokuapp.com/collections/examples"
	});
//create new instance of collection
	app.tasks = new Tasks();
})();
