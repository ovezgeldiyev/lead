// sliders
$(function () {
  $(".review__inner-row").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
