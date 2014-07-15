//(function ($) {
//instantiate collection
var tasks = new Tasks();
var appview = new AppView();

var listView = new ListView({
	collection: tasks
});


//instantiate new task
$(document).ready(function (){
	$('#taskList').append(listView.render().$el);
	$("#todoSubmit").submit(function(e){
		var task = new Task({title: $("#newTask").val()});
		task.save(); //instantiate new task with user input
		tasks.add(task);
		console.log(tasks.toJSON());
		return false; 
	});
});
//})(jQuery);