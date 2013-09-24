[{$smarty.block.parent}]

[{oxscript include="js/libs/jquery.min.js"}]
[{oxscript include="js/libs/jquery-ui.min.js"}]

[{oxscript include=$oViewConf->getModuleUrl('chf_ckeditor', 'src/ckeditor/ckeditor.js')}]
[{oxscript include=$oViewConf->getModuleUrl('chf_ckeditor', 'src/ckeditor/adapters/jquery.js')}]
[{oxscript include=$oViewConf->getModuleUrl('chf_ckeditor', 'src/scripts/chf_ckeditor.js')}]

[{*
<script type="text/javascript" src="https://chf/out/admin/src/js/libs/jquery.min.js"></script>
<script type="text/javascript" src="https://chf/out/admin/src/js/libs/jquery-ui.min.js"></script>


<script language="javascript" type="text/javascript" src="[{$oViewConf->getModuleUrl('chf_ckeditor', 'src/ckeditor/ckeditor.js')}]"></script>
<script language="javascript" type="text/javascript" src="[{$oViewConf->getModuleUrl('chf_ckeditor', 'src/ckeditor/adapters/jquery.js')}]"></script>
<script language="javascript" type="text/javascript" src="[{$oViewConf->getModuleUrl('chf_ckeditor', 'src/scripts/chf_ckeditor.js')}]"></script>

*}]