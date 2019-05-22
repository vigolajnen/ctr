(function() {
  document
    .querySelector(".js-bl-modal-btn")
    .addEventListener("click", function(evt) {
      console.log(evt);

      parent.postMessage({
        source: 6,
        type: "upload",
        target: 5
      });
    });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 6,
        type: "close",
        target: 6
      });
    });
})();
