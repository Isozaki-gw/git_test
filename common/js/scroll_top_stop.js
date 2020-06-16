/*===========================================================

  scroll_top_stop.js
    スクロールトップがfooterの上あたりなどで止まるJS
    2018.01.11

===========================================================*/

$(function(){
  var pageTop = $('#pagetop');
  $('body').css('position','relative');//bodyに対して固定

  $(window).scroll(function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();

    if ( scrollHeight - scrollPosition  <= footHeight ) {
      pageTop.css({
        "position":"absolute",
        "bottom": footHeight + 40
      });
    } else {
      pageTop.css({
        "position":"fixed",
        "bottom": "40px"
      });
    }
  });
});
