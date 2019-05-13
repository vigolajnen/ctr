"use strict";

// слайдеры на главной
$(document).ready(function() {
  if (window.outerWidth < 992) {
    $("#slider-main-goods").slick({
      dots: true,
      arrow: false,
      centerPadding: "40px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    $("#js-slider-project-2").slick({
      dots: true,
      arrow: false,
      centerPadding: "40px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    $("#js-slider-project").slick({
      dots: true,
      arrow: false,
      centerPadding: "40px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  window.addEventListener("resize", function() {
    if (window.outerWidth < 992) {
      $("#slider-main-goods").slick({
        dots: true,
        arrow: false,
        centerPadding: "40px",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

      $("#js-slider-project").slick({
        dots: true,
        arrow: false,
        centerPadding: "40px",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
  });
});




 $(".slider__for").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   dots: true,
   asNavFor: ".slider__nav"
 });
 $(".slider__nav").slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: ".slider__for",
   dots: false,
   arrow: true,
   centerMode: true,
   centerPadding: "40px",
   focusOnSelect: true
 });
