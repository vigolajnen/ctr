(function() {
  var widgetButton = document.querySelector("span[data-modal='6']");
  widgetButton.addEventListener("click", function(evt) {
    console.log(evt);
    evt.preventDefault();

    document.querySelector(".bl-modal[data-modal='6']").classList.add('active');

    // parent.postMessage(
    //   {
    //     source: 0,
    //     type: "edit",
    //     target: 6
    //   },
    //   "*"
    // );
  });
})();
