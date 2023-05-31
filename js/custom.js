$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });

  $('.recommend-list > div').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.recommend-con').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
  });
});



