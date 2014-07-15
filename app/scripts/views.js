//views  

var ENTER_KEY = 13;
var ListView;
var AppView;
//instantiate collection
var tasks = new Tasks();

//view for the individual tasks 
	ListView = Backbone.View.extend({
		//tagName: 'li',
		model: Task,
		render: function(){
	        this.template = Handlebars.compile($('#template').html()); 
	        var rendered = this.template({tasks: this.collection.toJSON()});
	        this.$el.html(rendered); //should this be .html instead of .append?
	        //this.$el.toggleClass('done', this.model.get('done'));
	        return this; 
		},
		initialize: function() {
    	 this.listenTo(this.collection, 'add', this.render);
    	 this.listenTo(this.collection, 'remove', this.remove);
    	 this.collection.fetch();
 	    },
		events: {
			//'click .edit' : 'edit',
			'click .remove' : 'remove',
			//'blur .title' : 'close',
			//'keypress .title' : 'enterSubmit',
			'click .toggle': 'toggleDone'
		},
		// initialize: function(){
		// 	//this.listenTo(this.model, 'change', this.render);
		// 	//	this.listenTo(this.model, 'destroy', this.remove);
		// },
		toggleDone: function(e){
			var id = $(e.target).parent().attr('id');
			var item = this.collection.get(id);
			item.toggle();
			console.log(item.attributes);
		},
		
		/*edit: function(e){
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
			if(e.which === ENTER_KEY){
      			this.close();
      			return this;
      		}
		},*/
		
	    
		remove: function(e){
			var id = $(e.target).parent().attr('id');
			var item = this.model.get(id);	
			item.remove();	
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
			/*_.each(this.model.toArray(), function(task, i){
				self.$el.append((new ListView({model: task})).render().$el);

			});*/
			return this;
		},
	});




