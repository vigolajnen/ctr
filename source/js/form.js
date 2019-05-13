$('.form__input--file').change(function () {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
  else $(this).prev().text('Прикрепить файл');
});
