(function() {
  var widgetButton = document.querySelector("span[data-modal='6']");
  widgetButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    parent.postMessage(
      {
        source: 0,
        type: "edit",
        target: 6
      },
      "*"
    );
  });
})();
