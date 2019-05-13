// var oldScrollY = 0;

// var div = document.querySelector('.page-header');
// div.classList.add('fixed');

// $(window).ready(function () {
//   div.classList.add('fixed');
//   window.onscroll = function () {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     var dY = scrolled - oldScrollY;

//     if (dY > 0) {
//       div.className = "page-header fixed fixed-bottom";
//     } else {
//       div.className = "page-header fixed fixed-top";
//     }

//     if ($(window).scrollTop() < 60) {
//       div.classList.remove('fixed-top');
//     }

//     if ($(window).scrollTop() < 20) {
//       div.classList.remove('fixed-bottom');
//     }


//     if ($(window).scrollTop() > 700) {
//       div.classList.add('header-mobile--dark');
//     } else {
//       div.classList.remove('header-mobile--dark');
//     }

//     oldScrollY = scrolled;
//   }
// });
