//collections
var Tasks;

(function () {
	var Tasks = Backbone.Collection.extend({
		model: Task,
		url: "http://tiny-pizza-server.herokuapp.com/collections/blargh"
	});

})();

//create new instance of collection
	var tasks = new Tasks();