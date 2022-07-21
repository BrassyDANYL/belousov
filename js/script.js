$(document).ready(function () {
   $('.slider-con').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      nextArrow: '<div class="slick-next">></div>',
      prevArrow: '<div class="slick-prev"><</div>',
      responsive: [{
         breakpoint: 550,
         settings: {
            dots: false
         }
      }]
   });
});
