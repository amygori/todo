//collections
var Tasks;
var Tasks = Backbone.Collection.extend({
	model: Task,
	url: "http://tiny-pizza-server.herokuapp.com/collections/blargh",
	//put comparator here?
});

