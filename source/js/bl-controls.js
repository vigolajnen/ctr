"use strict";

var controlsWrapper = document.querySelector(".block-control");
var controlItems = document.querySelectorAll(".block-control__btn");
// if (controlItems) {
//   controlItems.forEach(function(item) {
//     item.addEventListener("click", function(evt) {
//       evt.preventDefault();
//       if (item.classList.contains("active")) {
//         item.classList.remove("active");
//       } else {
//         item.classList.add("active");
//       }
//     });
//   });
// }
if (controlsWrapper) {
  controlsWrapper.addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeItem = evt.target;
    if (activeItem.tagName != "BUTTON") return;
    console.log(activeItem);

    for (var i = 0; i < controlItems.length; i++) {
      controlItems[i].parentNode.classList.remove("active");
    }

    activeItem.parentNode.classList.add("active");

    // controlItems.forEach(function(item) {
    //   if (item == activeItem) {
    //     item.classList.remove("active");
    //     activeItem.classList.add("active");
    //   } else {
    //     item.classList.add("active");
    //   }
    // });
  });
}
