"use strict";

// (function () {
//   $("#tabs-links>li>a").click(function() {
//     $("#tabs-links>li>a").removeClass("tabs__active");
//     $(this).addClass("tabs__active");
//     $("#tabs-container>div").hide();
//     var t_content = $(this).attr("href");
//     $(t_content).show();
//     return false;
//   });
//   $("#tabs-links>.tabs__item:first-child a").trigger("click");

// })();


(function() {
  var tabs = document.querySelector('.tabs');
  var tabLinks = tabs.querySelectorAll(".tabs__link");
  var tabPanels = tabs.querySelectorAll(".tabs__panel");

  var activeItem = tabs.querySelector(".tabs__item.active");
  var activePanel = tabs.querySelector(".tabs__panel.active");

  tabLinks.forEach(function(tab){
    tab.addEventListener('click', function(evt){
      evt.preventDefault();

      if(!tab.classList.contains('active')) {

      }
    });
  });
})();
