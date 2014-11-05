
(function($){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'showTodos'
		},
		showTodos: function(){
			var listview = new ListView(){
				collection: tasks
			}
		}
	});
	new AppRouter();
	Backbone.history.start();
})(jQuery);


