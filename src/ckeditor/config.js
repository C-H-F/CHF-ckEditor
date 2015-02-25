/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'de';
	//config.uiColor = '#000000';
	config.protectedSource.push(/\[\{[\s\S]*?\}\]/g); //smarty
	config.protectedSource.push(/<!--[{\s\S]*?-->/g); //comment
	config.protectedSource.push(/<%txt\n[{\s\S]*\n?txt%>/g); //plain-text
	
	//config.extraPlugins = 'imagemaps'; // bla,bla,imagemap
	
	config.removePlugins = 'save'; //SAVE entfernen
	config.allowedContent = true; 
	
	config.filebrowserBrowseUrl = '/modules/chf_ckeditor/pdw_file_browser';
    config.filebrowserImageBrowseUrl = '/modules/chf_ckeditor/pdw_file_browser';
};
