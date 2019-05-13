"use strict";
(function() {
  var list = document.querySelector(".sort__list");
  var box = document.querySelector(".sort__mobile-item");

  var sortList = [
    {
      id: 1,
      name: "По виду работ"
    },
    {
      id: 2,
      name: "По результату"
    },
    {
      id: 3,
      name: "По цене"
    }
  ];

  var activeSortItem = sortList[0];

  if (box && list) {
    box.innerHTML = activeSortItem.name;
    list.innerHTML = "";

    sortList.forEach(function(item) {
      var li = createElementFromHtmlList(
        '<li class="sort__item" data-value=""></li>'
      );
      li.innerHTML =
        '<button class="button sort__button">' + item.name + "</button>";
      li.attributes[1].value = item.id;
      list.appendChild(li);
    });

    function createElementFromHtmlList(html) {
      var list = document.createElement("li");
      list.innerHTML = html;
      return list.children[0];
    }

    box.addEventListener("click", function() {
      if (list.classList.contains("sort__list--active")) {
        list.classList.remove("sort__list--active");
      }
      list.classList.add("sort__list--active");
      list.addEventListener("click", function() {
        var target = event.target;
        box.innerHTML = target.innerHTML;
        list.classList.remove("sort__list--active");
      });
    });
  }
})();
