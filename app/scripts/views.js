//views  
var app = app || {};
var ENTER_KEY = 13;

(function () {
	'use strict';

//view for the individual tasks 
	ListView = Backbone.View.extend({
		tagName: 'li',
	    render: function(){
	        var template = Handlebars.compile($('#todo-list').html()); 
	        var rendered = template({app.tasks:this.model.toJSON()});
	        this.$el.append(rendered); //should this be .html instead of .append?
	        this.$el.toggleClass('done', this.model.get('done'));
	        return this; 
		},
		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			//	this.listenTo(this.model, 'destroy', this.remove);
		},
		events: {
        	'keypress #newTask': 'createNewTask'
      	},
      	createNewTask: function(e){
      		if(e.which === ENTER_KEY){
      			this.close();
      			return this;
      		}
      	},

	});

	
//view for the app
	AppView = Backbone.View.extend({
		el: '#todoApp',
		initialize: function(){
        	this.input = this.$('#newTask');
        	app.tasks.on('add', this.addAll, this);
        	app.tasks.on('reset', this.addAll, this);
        	app.tasks.fetch();
        	this.listenTo(app.tasks, 'add', this.addTask);
		},
		events: {
        	'keypress #newTask': 'createNewTask'
      	},	
      	
      	createNewTask: function(e){
      		if(e.which === ENTER_KEY){
      			this.close();
      			return this;
      		}
        	app.tasks.create(this.newAttributes());
        	this.input.val(''); 
      	},
      	addTask: function (task) {
      		var view = new ListView({model: task});
      		this.$list.append(view.render().el);
      	},
      	addAll: function(){
        	this.$('#todo-list').html(''); 
        	app.tasks.each(this.addOne, this);
      	},
      	newAttributes: function(){
        	return {
          		title: this.input.val().trim(),
          		done: false
        	}
      	}
	});
})();

appview = new AppView();