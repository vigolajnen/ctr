(function() {
  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 5,
        type: "close",
        target: 5
      });
    });
})();
