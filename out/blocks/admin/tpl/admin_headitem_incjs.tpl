[{$smarty.block.parent}]

[{oxscript include="js/libs/jquery.min.js"}]
[{oxscript include="js/libs/jquery-ui.min.js"}]

[{oxscript include=$oViewConf->getModuleUrl('ck-editor', 'src/ckeditor/ckeditor.js')}]
[{oxscript include=$oViewConf->getModuleUrl('ck-editor', 'src/ckeditor/adapters/jquery.js')}]
[{oxscript include=$oViewConf->getModuleUrl('ck-editor', 'src/scripts/chf_ckeditor.js')}]