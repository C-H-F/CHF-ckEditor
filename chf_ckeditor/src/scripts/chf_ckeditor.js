$(document).ready(function(){
	var prefix = 'editor_';
	
	$('textarea[id^="'+prefix+'"]').each(function(){
		$this = $(this);
		
		$this.ckeditor();
		
	});
	
});