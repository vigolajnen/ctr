(function() {
  parent.postMessage({
    source: 1,
    type: "add widget",
    target: 1
  });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 1,
        type: "close",
        target: 1
      });
    });
})();
