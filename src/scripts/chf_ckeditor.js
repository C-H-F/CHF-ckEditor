$(document).ready(function(){
	var prefix = 'editor_';
	
	var cmsIdent = ($('input[name="editval[oxcontents__oxloadid]"]').val());
	
	if(typeof(cmsIdent) == "undefined" || cmsIdent.indexOf("plain") == -1){
		
		$('textarea[id^="'+prefix+'"]').each(function(){
			$this = $(this);
			
			$this.ckeditor();
			
		});
		
	}
	
});