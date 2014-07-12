//views  

//https://www.youtube.com/watch?v=PcTVQyrWSSs
todoView = Backbone.View.extend({
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



ListView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function(){
	},
	render: function(){
		this.$el.empty();
		this.$el.append('<li></li>');
		return this;
	}
});

var source   = $("#todo-list").html();
var template = Handlebars.compile(source);

render: function(){
	$(this.el).html(this.template({model:this.model}));
return.this;
}
this.listenTo(this.model, 'change', this.render);