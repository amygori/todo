//(function ($) {
//instantiate collection
	var tasks = new Tasks();

//instantiate new task
	$(document).ready(function (){
		$("#todoSubmit").submit(function(e){
			var task = new Task({title: $("#newTask").val()}); //instantiate new task with user input
			tasks.add(task);
			return false; 
		});
	});
//})(jQuery);