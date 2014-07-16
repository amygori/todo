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
    	 this.listenTo(this.collection, 'destroy', this.remove);
    	 this.collection.fetch();
 	    },
		events: {
			//'click .edit' : 'edit',
			'click .remove' : 'remove',
			//'blur .title' : 'close',
			//'keypress .title' : 'enterSubmit',
			'click .toggle': 'toggleDone'
		},
		toggleDone: function(e){
			var id = $(e.target).parent().attr('id');
			var item = this.collection.get(id);
			item.toggle();
			console.log(item.attributes);
		},
		
		remove: function(e){
			var doneItems = this.collection.where({done: true});
			_.each(doneItems, function (item) {
				item.destroy({success: function (model, response){
					window.location.reload();
				}});
			})
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




