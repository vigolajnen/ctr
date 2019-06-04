var createIframe = function(name, src) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("name", name);
  iframe.setAttribute("src", src);
  iframe.setAttribute("class", "js-iframe");

  return iframe;
};

var iframes = [
  createIframe("add", "add-w.html"),
  createIframe("code", "code.html"),
  createIframe("settings", "settings.html"),
  createIframe("structure", "structure.html"),
  createIframe("images", "images.html"),
  createIframe("edit", "bl-edit.html"),
  createIframe("widget", "widget.html")
];

(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var openIframes = document.querySelectorAll(".js-bl-modal-btn");
    openIframes.forEach(function(btn) {
      btn.addEventListener("click", function(evt) {
        evt.preventDefault();
        var idBtn = this.getAttribute("data-modal");
        // console.log(idBtn);

          if (idBtn == 2) {
            document
              .querySelector(".wrapper")
              .appendChild(iframes[1]);
            iframes[1].onload = function() {
              iframes[1].contentWindow.document
                .querySelector(".bl-modal")
                .classList.add("active");
            };
          } else if (idBtn == 3) {
            document
              .querySelector(".wrapper")
              .appendChild(iframes[2]);
            iframes[2].onload = function() {
              iframes[2].contentWindow.document
                .querySelector(".bl-modal")
                .classList.add("active");
            };
          } else if (idBtn == 4) {
            document
              .querySelector(".wrapper")
              .appendChild(iframes[3]);
            iframes[3].onload = function() {
              iframes[3].contentWindow.document
                .querySelector(".bl-modal")
                .classList.add("active");
            };
          } else if (idBtn == 5) {
            document
              .querySelector(".wrapper")
              .appendChild(iframes[4]);
            iframes[4].onload = function() {
              iframes[4].contentWindow.document
                .querySelector(".bl-modal")
                .classList.add("active");
            };
          } else if (idBtn == 7) {
            document.querySelector('.wrapper').classList.add('container-xs');
            document.querySelector('.wrapper').classList.remove('container-sm');
          } else if (idBtn == 8) {
            document
              .querySelector(".wrapper")
              .classList.add("container-sm");
              document
                .querySelector(".wrapper")
                .classList.remove("container-xs");
          } else if (idBtn == 9) {
            document
              .querySelector(".wrapper")
              .classList.remove("container-xs");
              document
                .querySelector(".wrapper")
                .classList.remove("container-sm");

          } else if (idBtn == 1) {
            document
              .querySelector(".wrapper")
              .appendChild(iframes[0]);
            iframes[0].onload = function() {
              iframes[0].contentWindow.document
                .querySelector(".bl-modal")
                .classList.add("active");
            };
          }
      });
    });
  });
})();

(function() {
  window.addEventListener("message", function(evt) {
    // console.log(evt);
    if (evt.data.target == 6 && evt.data.source == 0) {
      iframes[5].onload = function() {
        iframes[5].contentWindow.document
          .querySelector(".bl-modal")
          .classList.add("active");
      };
      document.querySelector(".wrapper").appendChild(iframes[5]);
    } else if (evt.data.target == 5 && evt.data.source == 6) {
      iframes[4].onload = function() {
        iframes[4].contentWindow.document
          .querySelector(".bl-modal")
          .classList.add("active");
      };
      document.querySelector(".wrapper").appendChild(iframes[4]);
    } else if (evt.data.target == 5 && evt.data.source == 6) {
      iframes[4].onload = function() {
        iframes[4].contentWindow.document
          .querySelector(".bl-modal")
          .classList.add("active");
      };
      document.querySelector(".wrapper").appendChild(iframes[4]);
    } else if (evt.data.type == "close" && evt.data.target == 6) {
      iframes[5].onload = function() {
        iframes[5].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[5]);
    } else if (evt.data.type == "close" && evt.data.target == 5) {
      iframes[4].onload = function() {
        iframes[4].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[4]);
    } else if (evt.data.type == "close" && evt.data.target == 2) {
      iframes[4].onload = function() {
        iframes[4].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[1]);
    } else if (evt.data.type == "close" && evt.data.target == 9) {
      iframes[8].onload = function() {
        iframes[8].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[8]);
    } else if (evt.data.type == "close" && evt.data.target == 8) {
      iframes[7].onload = function() {
        iframes[7].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[7]);
    } else if (evt.data.type == "close" && evt.data.target == 7) {
      iframes[6].onload = function() {
        iframes[6].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[6]);
    } else if (evt.data.type == "close" && evt.data.target == 4) {
      iframes[3].onload = function() {
        iframes[3].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[3]);
    } else if (evt.data.type == "close" && evt.data.target == 3) {
      iframes[2].onload = function() {
        iframes[2].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[2]);
    } else if (evt.data.type == "close" && evt.data.target == 2) {
      iframes[1].onload = function() {
        iframes[1].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[1]);
    } else if (evt.data.type == "close" && evt.data.target == 1) {
      iframes[0].onload = function() {
        iframes[0].contentWindow.document
          .querySelector(".bl-modal")
          .classList.remove("active");
      };
      document.querySelector(".wrapper").removeChild(iframes[0]);
    }
  });
})();
