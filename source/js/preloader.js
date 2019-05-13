// var preloader = document.querySelector('.preloader');

// document.addEventListener("DOMContentLoaded", function() {
//   setTimeout(function() {
//     preloader.
//   }, 2000);
// }, false);

$(window).on("load", function() {

  $(".preloader").fadeOut();
  $(".preloader")
    .delay(350)
    .fadeOut("slow");
});
