$(document).ready(function() {
  $('.header__block-slider').slick({
    // lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});

$(document).ready(function() {
  $('.block-slider__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow: $('.slider-btn--prev'),
      nextArrow: $('.slider-btn--next'),

      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
      ]
  });
});

$(document).ready(function() {
  var $dot = $('.dots-header__item');
    $dot.click(function (event) {
    $dot.removeClass('dots-header__item--active').eq($(this).index())
      .addClass('dots-header__item--active');
  });
});

// $('a[href^="#"]').bind('click.smoothscroll',function (e) {
//   e.preventDefault();
  
//  var target = this.hash,
//   $target = $(target);
  
//  $('html, body').stop().animate({
//   'scrollTop': $target.offset().top
//   }, 500, 'swing', function () {
//   window.location.hash = target;
//   });
//   });


// $(function(){

//   $('.menuToggle').on('click', function() {
//      $('.menu').slideToggle(300, function(){
//           if( $(this).css('display') === "none"){
//               $(this).removeAttr('style');
//           }
//      });
//   });

// });


// var terget = $('html, body');
// $('a[href*="#"]').click(function() {
//     terget.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });

