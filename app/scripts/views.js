//views  
var app = app {};

(function () {
	'use strict';

//view for the individual tasks 
	ListView = Backbone.View.extend({
		tagName: 'li',
	    render: function(){
	        var template = Handlebars.compile($('#todo-list').html()), 
	        var rendered = template({app.tasks:this.model.toJSON()});
	        this.$el.append(rendered); //should this be .html instead of .append?
	        return this; 
		}
		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			//	this.listenTo(this.model, 'destroy', this.remove);
		}
	});


	
	
	AppView = Backbone.View.extend({
		el: '.todo-app',
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.empty();
			this.$el.append([TEMPLATE]);
			this.listView = new ListView
			this.$el.append(this.listview.render().el);
			return this;
		}
	
	});

})();