(function() {
  parent.postMessage({
    source: 8,
    type: "tablet",
    target: 8
  });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 8,
        type: "close",
        target: 8
      });
    });
})();
