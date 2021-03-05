// Слайдер приемущества
$('.slider__wrapper').slick({
  infinite: false,
  arrows: true,
  draggable: false,
  fade: true,
  prevArrow: $('.advantages__arrow--left'),
  nextArrow: $('.advantages__arrow--right'),
});

$('.slider__wrapper').on('afterChange', function(event, slick, currentSlide){
  $('.advantages__current-slide').text(currentSlide + 1);
});