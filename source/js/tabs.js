"use strict";

(function () {
  $("#tabs-links>li>a").click(function() {
    $("#tabs-links>li>a").removeClass("tabs__active");
    $(this).addClass("tabs__active");
    $("#tabs-container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#tabs-links>.tabs__item:first-child a").trigger("click");

})();
