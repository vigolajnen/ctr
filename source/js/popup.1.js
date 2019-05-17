(function() {
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
        var modalId = this.getAttribute("data-modal");


        var modalIframe = document.querySelector(
          '.js-iframe[data-modal="' + modalId + '"]'
        );
        modalIframe.classList.add("active");
        console.log(modalIframe.contentWindow.document.querySelector(".js-bl-modal-btn"));

        var modalElem = modalIframe.contentWindow.document.querySelector('.bl-modal[data-modal="' + modalId + '"]');

        
        /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        if(modalElem) {
          modalElem.classList.add("active");
        }
        
        modalIframe.contentWindow.document.querySelector(".js-overlay-bl-modal").classList.add("active");

        modalIframe.contentWindow.document.querySelector(".js-bl-modal-close").addEventListener('click', function (evt) {
          console.log(evt.target);
          modalElem.classList.remove("active");
          modalIframe.contentWindow.document.querySelector(".js-overlay-bl-modal").classList.remove("active");
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

    // overlay.addEventListener("click", function() {
    //   document.querySelector(".bl-modal.active").classList.remove("active");
    //   this.classList.remove("active");
    // });

    // var iframeAdd = document.querySelector(".js-iframe-add-w");
    // var iframeCode = document.querySelector(".js-iframe-code");
    // var iframeSettings = document.querySelector(".js-iframe-settings");
    // var iframeStructure = document.querySelector(".js-iframe-structure");
    // var iframeImages = document.querySelector(".js-iframe-images");
    // var iframeBledit = document.querySelector(".js-iframe-bl-edit");

    // if (iframeAdd) {
    //   var iframe = iframeAdd.contentWindow;
    //   console.log(iframe);
    //   iframe.addEventListener("click", function(e) {
    //     var target = e.target;
    //     console.log(target.parentNode);
    //     if (target.parentNode.classList.contains("js-bl-modal-close")) {
    //       closeButtons.forEach(function(item) {
    //         item.addEventListener("click", function(e) {
    //           var parentModal = this.closest(".bl-modal");

    //           parentModal.classList.remove("active");
    //           overlay.classList.remove("active");
    //         });
    //       });
    //     }
    //   });
    // }
  }); // end ready
})();
