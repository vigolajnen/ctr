// (function() {
//   document.addEventListener("DOMContentLoaded", function() {
//     var modalButtons = document.querySelectorAll(".js-bl-modal-btn"),
//       overlay = document.querySelector(".js-overlay-bl-modal"),
//       closeButtons = document.querySelectorAll(".js-bl-modal-close");

//     /* Перебираем массив кнопок */
//     modalButtons.forEach(function(item) {
//       /* Назначаем каждой кнопке обработчик клика */
//       item.addEventListener("click", function(e) {
//         e.preventDefault();
//         var el = e.target;
//         el.getAttribute("data-modal");
//         console.log(e.target);

//         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
//             и будем искать iframe с таким же атрибутом. */
//         var modalId = this.getAttribute("data-modal");
//         console.log(modalId);

//         var modalIframe = document.querySelector(
//           '.js-iframe[data-modal="' + modalId + '"]'
//         );

//         // if (modalId = 6) {
//         //   modalIframe.contentWindow.document
//         //     .querySelector('.bl-modal[data-modal="' + modalId + '"]')
//         //     .classList.add("active");
//         // } else {}
//         modalIframe.classList.add("active");
//         // console.log(modalIframe.contentWindow.document.querySelector(".js-bl-modal-btn"));
//         var modalElem = modalIframe.contentWindow.document.querySelector(
//           '.bl-modal[data-modal="' + modalId + '"]'
//         );

//         /* После того как нашли нужное модальное окно, добавим классы
//             подложке и окну чтобы показать их. */
//         if (modalElem) {
//           modalElem.classList.add("active");
//         }

//         modalIframe.contentWindow.document
//           .querySelector(".js-overlay-bl-modal")
//           .classList.add("active");

//         modalIframe.contentWindow.document
//           .querySelector(".js-bl-modal-close")
//           .addEventListener("click", function(evt) {
//             modalElem.classList.remove("active");
//             modalIframe.contentWindow.document
//               .querySelector(".js-overlay-bl-modal")
//               .classList.remove("active");
//             modalIframe.classList.remove("active");
//           });


//       }); // end click
//     }); // end foreach

//     // closeButtons.forEach(function(item) {
//     //   item.addEventListener("click", function(e) {
//     //     var parentModal = this.closest(".bl-modal");

//     //     parentModal.classList.remove("active");
//     //     overlay.classList.remove("active");
//     //   });
//     // }); // end foreach

//     document.body.addEventListener(
//       "keyup",
//       function(e) {
//         var key = e.keyCode;

//         if (key == 27) {
//           document.querySelector(".bl-modal.active").classList.remove("active");
//           document
//             .querySelector(".bl-modal__overlay")
//             .classList.remove("active");
//         }
//       },
//       false
//     );
//   }); // end ready
// })();


var createIframe = function (name, src) {

  var iframe = document.createElement("iframe");
  iframe.setAttribute("name", name);
  iframe.setAttribute("src", src);
  iframe.setAttribute("class", "js-iframe");

  return iframe;
};

var iframes = [
  createIframe("add", "add-w.html"),
  createIframe("code", "code.html"),
  createIframe("settings", "settings.html"),
  createIframe("structure", "structure.html"),
  createIframe("images", "images.html"),
  createIframe("edit", "bl-edit.html"),
  createIframe("phone", "phone.html"),
  createIframe("tablet", "tablet.html"),
  createIframe("laptop", "laptop.html"),
  createIframe("widget", "widget.html"),
];




(function () {

  window.addEventListener('message', function (evt) {
    console.log(evt);
    if (evt.data.target == 6 && evt.data.source == 0) {

      iframes[5].onload = function () {
        
        iframes[5].contentWindow.document.querySelector(".bl-modal").classList.add('active');
      }
      document.querySelector('.wrapper').appendChild(iframes[5]);

    } else if (evt.data.target == 5 && evt.data.source == 6) {

      iframes[4].onload = function () {
        iframes[4].contentWindow.document.querySelector(".bl-modal").classList.add('active');
      }
      document.querySelector('.wrapper').appendChild(iframes[4]);
    }
  });
  
})();