
CKEDITOR.plugins.add( 'imagemaps',
{
	requires : [ 'dialog' ],
	// translations
	lang : ['en', 'de', 'el', 'es', 'it', 'nl', 'sv', 'tr'],

	init : function( editor )
	{
		var icon = this.path + 'icon.png';

		CKEDITOR.dialog.add( 'ImageMaps', this.path + 'dialog/imagemaps.js');

		var imagemapCommand = editor.addCommand( 'ImageMaps', new CKEDITOR.dialogCommand( 'ImageMaps' ) );

		imagemapCommand.startDisabled = true;

		editor.ui.addButton( 'ImageMaps',
			{
				label : editor.lang.imagemaps.toolbar,
				command : 'ImageMaps',
				icon : icon
			} );


		// If the "menu" plugin is loaded, register the menu items.
		if ( editor.addMenuItems )
		{
			editor.addMenuItems(
				{
					imagemap :
					{
						label : editor.lang.imagemaps.menu,
						command : 'ImageMaps',
						group : 'image',
						order : 1,
						icon : icon
					}
				});
		}

		// If the "contextmenu" plugin is loaded, register the listeners.
		if ( editor.contextMenu )
		{
			// check the image
			editor.contextMenu.addListener( function( element, selection )
				{
					if ( !element || !element.is( 'img' ) || (element.data && element.data( 'cke-realelement' )) || element.isReadOnly() )
						return null;

					// And say that this context menu item must be shown
					return { imagemap : ( element.hasAttribute( 'usemap' ) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_ON ) };
				});

		}

		// Open our dialog on double click
		editor.on( 'doubleclick', function( evt )
			{
				var element = evt.data.element,
					editor = evt.editor;

				// Firefox: we can click on the "area" element, and then we won't get the good img node
				if ( element.is( 'area' ))
				{
					var map = element.getParent().$,
						id = map.getAttribute('id'),
						doc = editor.document.$,
						img;

					if (doc.querySelector)
					{
						img = doc.querySelector('img[usemap="#' + id + '"]');
					}
					if (img)
					{
						editor.getSelection().selectElement( new CKEDITOR.dom.element(img) );

						evt.data.dialog = 'ImageMaps';
						return;
					}
				}

				if ( element.is( 'img' ) && element.hasAttribute( 'usemap' ) )
				{
					editor.getSelection().selectElement( element );
					evt.data.dialog = 'ImageMaps';
				}
			// set the listener after the default ones
			}, null, null, 20);

		// Register the state changing handlers.
		editor.on( 'selectionChange', CKEDITOR.tools.bind( function( evt )
			{
				var editor = evt.editor,
					elementPath = evt.data.path,
					element = elementPath.lastElement;

				if (!element || !element.is( 'img' ))
					return this.setState( CKEDITOR.TRISTATE_DISABLED );

				return this.setState( element.hasAttribute( 'usemap' ) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF );
			}, imagemapCommand ) );

	}, //init

	afterInit: function( editor )
	{
		// Only for IE in quirks
		if (!( CKEDITOR.env.ie && CKEDITOR.env.quirks) )
			return;

		var dataProcessor = editor.dataProcessor,
			htmlFilter = dataProcessor && dataProcessor.htmlFilter;

		// htmlFilter : conversion from internal data to html output.
		htmlFilter.addRules(
			{
				elements :
				{
					map : function( element )
					{
						// IE in quirks sets id on the map but not the name
						if ( element.attributes.id && !element.attributes.name )
						{
							element.attributes.name = element.attributes.id;
						}

						return element;
					}
				}
			});

	} // afterInit
});

/*
compatibility between CKEditor 3 and 4
*/
CKEDITOR.addPluginLang = function( plugin, lang, obj )
{
	// v3
	if (CKEDITOR.skins)
	{
		var newObj = {};
		newObj[ plugin ] = obj;
		obj = newObj;
	}
	CKEDITOR.plugins.setLang( plugin, lang, obj );
};
