(function() {
  parent.postMessage({
    source: 7,
    type: "phone",
    target: 7
  });

  document
    .querySelector(".js-bl-modal-close")
    .addEventListener("click", function(evt) {
      parent.postMessage({
        source: 7,
        type: "close",
        target: 7
      });
    });
})();
