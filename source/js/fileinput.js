$('input[type="file"]').fileinput({
  title: "Загрузить фото",
  multipleText: "{0} files", // for multiple selection. {0} will be replaced with number of seleted files
  showMultipleNames: false, // if true, show filenames comma separated instead text from multipleText
  buttonClass: "link-button link-button--green"
});
