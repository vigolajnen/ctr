(function() {
  parent.postMessage({
    source: 9,
    type: "laptop",
    target: 9
  });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 9,
        type: "close",
        target: 9
      });
    });
})();
