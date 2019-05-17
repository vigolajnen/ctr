(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var modalButtons = document.querySelectorAll(".js-bl-modal-btn"),
      overlay = document.querySelector(".js-overlay-bl-modal"),
      closeButtons = document.querySelectorAll(".js-bl-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener("click", function(e) {
        e.preventDefault();
        var el = e.target;
        el.getAttribute("data-modal");
        console.log(e.target);

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать iframe с таким же атрибутом. */
        var modalId = this.getAttribute("data-modal");
        console.log(modalId);

        var modalIframe = document.querySelector(
          '.js-iframe[data-modal="' + modalId + '"]'
        );

        // if (modalId = "6") {
        //   modalIframe.contentWindow.document
        //     .querySelector('.bl-modal[data-modal="' + modalId + '"]')
        //     .classList.add("active");
        // } else {}
        modalIframe.classList.add("active");
        // console.log(modalIframe.contentWindow.document.querySelector(".js-bl-modal-btn"));
        var modalElem = modalIframe.contentWindow.document.querySelector(
          '.bl-modal[data-modal="' + modalId + '"]'
        );

        /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        if (modalElem) {
          modalElem.classList.add("active");
        }

        modalIframe.contentWindow.document
          .querySelector(".js-overlay-bl-modal")
          .classList.add("active");

        modalIframe.contentWindow.document
          .querySelector(".js-bl-modal-close")
          .addEventListener("click", function(evt) {
            modalElem.classList.remove("active");
            modalIframe.contentWindow.document
              .querySelector(".js-overlay-bl-modal")
              .classList.remove("active");
            modalIframe.classList.remove("active");
          });


      }); // end click
    }); // end foreach

    // closeButtons.forEach(function(item) {
    //   item.addEventListener("click", function(e) {
    //     var parentModal = this.closest(".bl-modal");

    //     parentModal.classList.remove("active");
    //     overlay.classList.remove("active");
    //   });
    // }); // end foreach

    document.body.addEventListener(
      "keyup",
      function(e) {
        var key = e.keyCode;

        if (key == 27) {
          document.querySelector(".bl-modal.active").classList.remove("active");
          document
            .querySelector(".bl-modal__overlay")
            .classList.remove("active");
        }
      },
      false
    );
  }); // end ready
})();
