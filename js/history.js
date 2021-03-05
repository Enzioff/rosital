$('.tabs__item').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.tabs__dir[data-tab="'+ id +'"]');
  
  $('.tabs__header-active').removeClass('tabs__header-active'); // 1
  $(this).addClass('tabs__header-active'); // 2
  
  $('.tabs__content-active').removeClass('tabs__content-active'); // 3
  content.addClass('tabs__content-active'); // 4
});