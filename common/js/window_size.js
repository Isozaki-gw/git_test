/*===========================================================

  window_size.js
    ウィンドウサイズによってbodyにつけるクラス名を変更するJS
    2018.01.11

===========================================================*/

$(function(){
  var judgeDevice = function(){
    var windowWidth = $(window).innerWidth();

    if(windowWidth > 767) {
      $('body').removeClass('spWin');
      $('body').addClass('pcWin');
    } else {
      $('body').removeClass('pcWin');
      $('body').addClass('spWin');
    }
  }

  judgeDevice();

  $(window).on('load resize',function(){
    judgeDevice();
  });
});
