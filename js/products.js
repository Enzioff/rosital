$('.products__item').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.products__dir[data-tab="'+ id +'"]');
  
  $('.products__item-active').removeClass('products__item-active'); // 1
  $(this).addClass('products__item-active'); // 2
  
  $('.products__dir-active').removeClass('products__dir-active'); // 3
  content.addClass('products__dir-active'); // 4
});

$('.products__item').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.products__dir[data-tab="'+ id +'"]');
  
  $('.products__tabs .products__item-active').removeClass('products__item-active'); // 1
  $(this).addClass('products__item-active'); // 2
  
  $('.products__tabs .products__dir-active').removeClass('products__dir-active'); // 3
  content.addClass('products__dir-active'); // 4
});