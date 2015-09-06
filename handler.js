jQuery(function($) {
	//when the document is ready, add a click listner on media button, and call the method addContent when clicked
    $(document).ready(function(){
            $('#insert-my-media').click(addContent); 
    });
	function addContent() {
		//here you can add the content on editor
		var att1 = "";
		var x = 0;

		if(x != 0)
			att1 = 'xXxXxXxXxXxXx';
		else
			att1 = 'yYyYyYyYyYyYy';
		
		tinyMCE.activeEditor.insertContent('<h1>'+ att1 +'</h1>');
		tinyMCE.activeEditor.insertContent('['+ att1 +']');

		tinyMCE.activeEditor.insertContent('[gallery ids=729,732,731,720]');
		tinyMCE.activeEditor.insertContent('content inserted');
		tinyMCE.activeEditor.insertContent('<h1>example html</h1>');
	}
});