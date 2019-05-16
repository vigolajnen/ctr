"use strict";

// function _toConsumableArray(arr) {
//   return (
//     _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
//   );
// }

// function _nonIterableSpread() {
//   throw new TypeError("Invalid attempt to spread non-iterable instance");
// }

// function _iterableToArray(iter) {
//   if (
//     Symbol.iterator in Object(iter) ||
//     Object.prototype.toString.call(iter) === "[object Arguments]"
//   )
//     return Array.from(iter);
// }

// function _arrayWithoutHoles(arr) {
//   if (Array.isArray(arr)) {
//     for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
//       arr2[i] = arr[i];
//     }
//     return arr2;
//   }
// }

// var tabLinks = document.querySelectorAll(".tabs__link");
// var tabPanels = document.querySelectorAll(".tabs__panel");
// var _iteratorNormalCompletion = true;
// var _didIteratorError = false;
// var _iteratorError = undefined;

// try {
//   var _loop = function _loop() {
//     var el = _step.value;
//     el.addEventListener("click", function(e) {
//       console.log(el);
//       e.preventDefault();
//       document.querySelector(".tabs__item.active").classList.remove("active");
//       document.querySelector(".tabs__panel.active").classList.remove("active");
//       var parentListItem = el.parentElement;
//       parentListItem.classList.add("active");

//       var index = _toConsumableArray(
//         parentListItem.parentElement.children
//       ).indexOf(parentListItem);

//       var panel = _toConsumableArray(tabPanels).filter(function(el) {
//         return el.getAttribute("data-index") == index;
//       });

//       panel[0].classList.add("active");
//     });
//   };

//   for (
//     var _iterator = tabLinks[Symbol.iterator](), _step;
//     !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
//     _iteratorNormalCompletion = true
//   ) {
//     _loop();
//   }
// } catch (err) {
//   _didIteratorError = true;
//   _iteratorError = err;
// } finally {
//   try {
//     if (!_iteratorNormalCompletion && _iterator.return != null) {
//       _iterator.return();
//     }
//   } finally {
//     if (_didIteratorError) {
//       throw _iteratorError;
//     }
//   }
// }
(function() {
  var jsTriggers = document.querySelectorAll(".js-tab-trigger"),
    jsContents = document.querySelectorAll(".js-tab-content");
  jsTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-tab"),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-tab-trigger.active"),
        activeContent = document.querySelector(".js-tab-content.active");

      activeTrigger.classList.remove("active"); // 1
      trigger.classList.add("active"); // 2

      activeContent.classList.remove("active"); // 3
      content.classList.add("active"); // 4
    });
  });
})();

(function() {
  var jsTriggersSub = document.querySelectorAll(".js-subtab-trigger"),
    jsContentsSub = document.querySelectorAll(".js-subtab-content");
  jsTriggersSub.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var id = this.getAttribute("data-subtab"),
        content = document.querySelector(
          '.js-subtab-content[data-subtab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".js-subtab-trigger.active"),
        activeContent = document.querySelector(".js-subtab-content.active");

      activeTrigger.classList.remove("active"); // 1
      trigger.classList.add("active"); // 2

      activeContent.classList.remove("active"); // 3
      content.classList.add("active"); // 4
    });
  });
})();
