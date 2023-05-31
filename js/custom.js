$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });

  /* recommend tab-menu */
  $('.recommend-list > div').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.recommend-con').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
  });

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()
});



