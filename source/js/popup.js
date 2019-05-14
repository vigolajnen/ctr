(function() {
  var popup = document.querySelector(".bl-modal");
  var popupCode = document.querySelector("[data-id=js-popup-code]");
  var popupOverlay = popup.querySelector(".bl-modal__overlay");
  var popupBtnClose = popup.querySelectorAll("[data-id=js-popup-close]");
  var popupOpenmodal = document.querySelectorAll("[data-id=js-popup-btn]");
  var popupOpenmodalCode = document.querySelectorAll(
    "[data-id=js-popup-code-open]"
  );

  if (popupBtnClose) {
    popupBtnClose.forEach(function(i) {
      i.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("bl-modal-show");
        if (popupCode) {
          document
            .querySelector("[data-id=js-popup-code]")
            .classList.remove("bl-modal-show");
        }
          document.querySelector("body").classList.remove("overlay");
      });
    });
  }

  if (popupOpenmodal) {
    popupOpenmodal.forEach(function(i) {
      i.addEventListener("click", function(evt) {
        popup.classList.add("bl-modal-show");
        document.querySelector("body").classList.add("overlay");
        //inputName.focus();
      });
    });
  }

  if (popupOpenmodalCode) {
    popupOpenmodalCode.forEach(function(i) {
      i.addEventListener("click", function(evt) {
        popupCode.classList.add("bl-modal-show");
        document.querySelector("body").classList.add("overlay");
        //inputName.focus();
      });
    });
  }


})();
