$(document).ready(function(){
	var prefix = 'editor_';
	
	$('textarea[id^="'+prefix+'"]').each(function(){
		$this = $(this);
		
		$this.ckeditor();
		
		var id = $this.attr("id");
		var identifier = id.substring(prefix.length);
		
		$("input[name='editval["+identifier+"]']").remove();
		$this.attr("name", "editval["+identifier+"]");
		
	});
	
});