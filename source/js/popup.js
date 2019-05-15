(function() {
  // var popup = document.querySelector(".bl-modal");
  // // var popupCode = document.querySelector("[data-id=js-popup-code]");
  // var popupOverlay = popup.querySelector(".bl-modal__overlay");
  // var popupBtnClose = popup.querySelectorAll("[data-id=js-bl-modal-close]");
  // var popupOpenmodal = document.querySelectorAll("[data-id=js-bl-modal-btn]");
  // // var popupOpenmodalCode = document.querySelectorAll(
  // //   "[data-id=js-popup-code-open]"
  // // );

  // if (popupBtnClose) {
  //   popupBtnClose.forEach(function(i) {
  //     i.addEventListener("click", function(evt) {
  //       evt.preventDefault();
  //       popup.classList.remove("active");
  //       if (popupCode) {
  //         document
  //           .querySelector("[data-id=js-popup-code]")
  //           .classList.remove("active");
  //       }
  //       document.querySelector("body").classList.remove("overlay");
  //     });
  //   });
  // }

  // if (popupOpenmodal) {
  //   popupOpenmodal.forEach(function(i) {
  //     i.addEventListener("click", function(evt) {
  //       popup.classList.add("active");
  //       document.querySelector("body").classList.add("overlay");
  //       //inputName.focus();
  //     });
  //   });
  // }

  // if (popupOpenmodalCode) {
  //   popupOpenmodalCode.forEach(function(i) {
  //     i.addEventListener("click", function(evt) {
  //       popupCode.classList.add("active");
  //       document.querySelector("body").classList.add("overlay");
  //       //inputName.focus();
  //     });
  //   });
  // }

  document.addEventListener("DOMContentLoaded", function() {
    /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll(".js-bl-modal-btn"),
      overlay = document.querySelector(".js-overlay-bl-modal"),
      closeButtons = document.querySelectorAll(".js-bl-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener("click", function(e) {
        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector(
            '.bl-modal[data-modal="' + modalId + '"]'
          );

        /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        modalElem.classList.add("active");
        overlay.classList.add("active");
      }); // end click
    }); // end foreach

    closeButtons.forEach(function(item) {
      item.addEventListener("click", function(e) {
        var parentModal = this.closest(".bl-modal");

        parentModal.classList.remove("active");
        overlay.classList.remove("active");
      });
    }); // end foreach

    document.body.addEventListener(
      "keyup",
      function(e) {
        var key = e.keyCode;

        if (key == 27) {
          document
            .querySelector(".bl-modal.active")
            .classList.remove("active");
          document
            .querySelector(".bl-modal__overlay")
            .classList.remove("active");
        }
      },
      false
    );

    overlay.addEventListener("click", function() {
      document
        .querySelector(".bl-modal.active")
        .classList.remove("active");
      this.classList.remove("active");
    });
  }); // end ready
})();
