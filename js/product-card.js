// Галерея
$(document).ready(function() {
	$('.galery__item').on('click', function() {
		var url = $(this).children('img').attr('src');
    $(this).addClass("galery__item-active").siblings().removeClass("galery__item-active")
		$('.galery__box').children('img').attr('src', url);
	});
});

// Табы
$('.tabs-info__item').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.tabs-info__dir[data-tab="'+ id +'"]');
  
  $('.tabs-info__item-active').removeClass('tabs-info__item-active'); // 1
  $(this).addClass('tabs-info__item-active'); // 2
  
  $('.tabs-info__dir-active').removeClass('tabs-info__dir-active'); // 3
  content.addClass('tabs-info__dir-active'); // 4
});