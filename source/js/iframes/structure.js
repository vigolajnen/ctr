(function() {
  parent.postMessage({
    source: 4,
    type: "code page",
    target: 4
  });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 4,
        type: "close",
        target: 4
      });
    });
})();
