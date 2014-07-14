//models
var app = {};

var app.Task = Backbone.Model.extend({
	defaults: {
		title: ""
		idAttribute: '_id',
		done: false,
		urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/amy",
		//order: Tasks.nextOrder(),	
	}
});

app.Task.save();
