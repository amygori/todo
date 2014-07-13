//collections
var tasks = Backbone.Collection.extend({
	model: task,
	url: "http://tiny-pizza-server.herokuapp.com/collections/examples"
});