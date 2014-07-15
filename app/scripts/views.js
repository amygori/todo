//views  

var ENTER_KEY = 13;
var ListView;
var AppView;
//instantiate collection
var tasks = new Tasks();

//view for the individual tasks 
	ListView = Backbone.View.extend({
		tagName: 'li',
		model: new Task, //the model
		events: {
			'click .edit' : 'edit',
			'click .delete' : 'delete',
			'blur .title' : 'close',
			'keypress .title' : 'enterSubmit'
		},
		initialize: function(){
			this.template = Handlebars.compile($('#template').html()); 
			//this.listenTo(this.model, 'change', this.render);
			//	this.listenTo(this.model, 'destroy', this.remove);
		},
		edit: function(e){
			e.preventDefault();
			this.$('.title').attr('editable', true).focus();
		},
		close: function(e){
			var title = this.$('.title').text();
			this.model.set('title', title);
			this.$('.title').removeAttr('editable');
		},
		delete: function(e){
			e.preventDefault();
			tasks.remove(this.model);
		},
		enterSubmit: function(e){
			if(e.keycode === ENTER_KEY){
      			this.close();
      			return this;
      		}
		},
	    render: function(){
	        var rendered = this.template(this.model.toJSON());
	        this.$el.html(rendered); //should this be .html instead of .append?
	        this.$el.toggleClass('done', this.model.get('done'));
	        return this; 
		}		
	});

	
//view for the app
	AppView = Backbone.View.extend({
		model: tasks, //the collection NB: is this the right reference?
		el: $('#taskList'),
		initialize: function(){
        	this.model.on('add', this.render, this);
		},
		render: function(){
			var self = this;
			self.$el.html('');
			_.each(this.model.toArray(), function(task, i){
				self.$el.append((new ListView({model: task})).render().$el);
			});
			return this;
		},
	});



var appview = new AppView();