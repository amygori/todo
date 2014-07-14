//views  

var ENTER_KEY = 13;
var ListView;
var AppView;

(function ($) {
	'use strict';

//view for the individual tasks 
	ListView = Backbone.View.extend({
		tagName: 'li',
		model: new Task, //the model
		initialize: function(){
			this.template = Handlebars.compile($('#template').html()); 
			//this.listenTo(this.model, 'change', this.render);
			//	this.listenTo(this.model, 'destroy', this.remove);
		},
	    render: function(){
	        var rendered = this.template(this.model.toJSON());
	        this.$el.html(rendered); //should this be .html instead of .append?
	        this.$el.toggleClass('done', this.model.get('done'));
	        return this; 
		},		
	});

	
//view for the app
	AppView = Backbone.View.extend({
		model: Tasks, //the collection
		el: $('#taskList'),
		initialize: function(){
        	this.model.on('add', this.render, this);


        	/*this.input = this.$('#newTask');
        	tasks.on('add', this.addAll, this);
        	tasks.on('reset', this.addAll, this);
        	tasks.fetch();
        	this.listenTo(tasks, 'add', this.addTask);*/
		},
		render: function(){
			var self = this;
			self.$el.html('');
			_.each(this.model.toArray(), function(task, i){
				self.$el.append((new ListView({model: task})).render().$el);
			});
			return this;
		},
		
		/*events: {
        	'keypress #newTask': 'createNewTask'
      	},	
      	
      	



      	createNewTask: function(e){
      		if(e.which === ENTER_KEY){
      			this.close();
      			return this;
      		}
        	tasks.create(this.newAttributes());
        	this.input.val(''); 
      	},
      	addTask: function (task) {
      		var view = new ListView({model: task});
      		this.$list.append(view.render().el);
      	},
      	addAll: function(){
        	this.$('#todo-list').html(''); 
        	tasks.each(this.addOne, this);
      	},
      	newAttributes: function(){
        	return {
          		title: this.input.val().trim(),
          		done: false
        	}
      	}*/
	});
})(jQuery);


var appview = new AppView();