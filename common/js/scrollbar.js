/*===========================================================

  js_img_switch.js
    PCのとき、一定の高さを過ぎると追従するようになるJS
    2018.01.11

===========================================================*/

$(function () {
  //追従までの高さを計る
  var navOffsetTop
  $(window).on('load resize', function () {
    if($('#mainvisual').length){
      navOffsetTop = $('header').innerHeight() + $('#mainvisual').innerHeight();
    }else if($('.mv_area').length){
      navOffsetTop = $('header').innerHeight() + $('.mv_area').innerHeight();
    }
  });

  $(window).on('scroll', function () {
    if($(this).scrollTop() > navOffsetTop ) {
      $('#contents').addClass('is-fixed');
    } else {
      $('#contents').removeClass('is-fixed');
    }
  });
});
