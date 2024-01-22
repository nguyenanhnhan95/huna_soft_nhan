CKEDITOR.editorConfig = function(config) {
  config.resize_enabled = false;
  config.forcePasteAsPlainText = true;
  config.keystrokes = [
    [ CKEDITOR.CTRL + 86 /*V*/, 'pasteText' ],
  ];
  config.toolbar = 'Complex';
  config.toolbar_Simple = [['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-'], ['JustifyLeft', 'JustifyCenter',
    'JustifyRight', 'JustifyBlock']];
  config.toolbar_Complex = [
    ['Bold', 'Italic', 'Underline'],
    ['JustifyLeft', 'JustifyCenter',
      'JustifyRight', 'JustifyBlock'],
    ['Table', 'Smiley', 'SpecialChar', 'PageBreak',
      'Styles', 'Format', 'Font', 'FontSize']];
};