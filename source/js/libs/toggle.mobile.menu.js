// export var scroll = {
//   _body: document.body,

//   hideScroll: function () {
//       this._body.classList.add('no-scroll');

//       this._scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
//       this._body.style.position = 'fixed';
//       if (this._hasScrollbar()) {
//           // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
//           this._body.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
//       } else {
//           this._body.style.width = '100%';
//       }
//       this._body.style.top = -this._scrollTop + 'px';
//   },

//   showScroll: function () {
//       this._body.classList.remove('no-scroll');

//       this._body.style.position = '';
//       this._body.style.width = '';
//       this._body.style.top = '';
//       window.scroll(0, this._scrollTop);
//   },

//   _getScrollbarSize: function () {
//       let outer = document.createElement('header');
//       outer.style.visibility = 'hidden';
//       outer.style.width = '100px';
//       outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

//       document.body.appendChild(outer);

//       let widthNoScroll = outer.offsetWidth;
//       // force scrollbars
//       outer.style.overflow = 'scroll';

//       // add innerdiv
//       let inner = document.createElement('header');
//       inner.style.width = '100%';
//       outer.appendChild(inner);

//       let widthWithScroll = inner.offsetWidth;

//       // remove divs
//       outer.parentNode.removeChild(outer);

//       return widthNoScroll - widthWithScroll;
//   },

//   _hasScrollbar: function () {
//       return document.body.scrollHeight > document.body.clientHeight;
//   }
// };
// import { throttle } from 'lodash';

var mobileMenu = document.querySelector('.mobile-menu');
var openMenuBtn = document.querySelector('.js-mobile-menu-open');
var closeMenuBtn = document.querySelector('.js-mobile-menu-close');

// openMenuBtn.addEventListener('click', () => {
//     openMenu();
// });

// openMenuBtn.addEventListener('click', function () {
//   openMenu();
// })

// closeMenuBtn.addEventListener('click', function () {
//   closeMenu();
// })

// closeMenuBtn.addEventListener('click', () => {
//     closeMenu();
// });

// window.addEventListener('resize', _.throttle(() => {
//     if (window.matchMedia('(min-width: 768px)').matches && mobileMenu.classList.contains('mobile-menu--active')) {
//         closeMenu();
//     }
// }), 300);


// calcVH(mobileMenu);
// window.addEventListener('scroll', calcVH.bind(this, mobileMenu), true);
//
// function calcVH(elem) {
//     var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     elem.setAttribute("style", "height:" + vH + "px;");
//     console.log(elem, vH);
// }

function openMenu() {
    mobileMenu.classList.add('mobile-menu--active');
    // scroll.hideScroll();
}

function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--active');
    // scroll.showScroll();
}
