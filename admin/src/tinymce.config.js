export default {
  selector: 'textarea',
  statusbar: false,
  fontsize_formats: '8pt 9pt 10pt 11pt 12pt 14pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt',
  theme: 'modern',
  language:'ru',
  plugins: 'advlist, anchor, autolink, autoresize, charmap, codesample, colorpicker, contextmenu, directionality, fullscreen, hr, image, imagetools, insertdatetime, layer, lineheight, link, lists, media, paste, responsivefilemanager, searchreplace, stylebuttons, tabfocus, table, textcolor, visualchars',
  external_plugins: { 'filemanager': '../filemanager/plugin.min.js'},
  external_filemanager_path: '../node_modules/filemanager/',
  filemanager_title: 'Менеджер файлов',
  filemanager: '../filemanager/plugin.min.js',
  responsivefilemanager: '../../tinymce/plugins/responsivefilemanager/plugin.min.js',
  toolbar1: 'fullscreen searchreplace filemanager responsivefilemanager removeformat table numlist bullist link unlink image media insertdatetime hr charmap blockquote rtl ltr forecolor backcolor',
  toolbar2: 'style-h3 bold italic underline strikethrough | outdent indent alignleft aligncenter alignright alignjustify | fontselect fontsizeselect lineheightselect',
  relative_urls: false,
  theme_advanced_resizing: true,
  autoresize_bottom_margin: 10,
  menubar: false
}
