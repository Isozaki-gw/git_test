/*===========================================================

  js_img_switch.js
    ウィンドウサイズによって画像を入れ替えるJS
    2018.01.11

===========================================================*/

$(function() {
  var $setElem = $('.js_img_switch'),
  pcName = '_pc',
  spName = '_sp',
  replaceWidth = 641;
  $setElem.each(function() {
    var $this = $(this);
    function imgSize() {
      var windowWidth = parseInt($(window).width());
      if (windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(spName, pcName)).css({
          visibility: 'visible'
        });
      } else if (windowWidth < replaceWidth) {
        $this.attr('src', $this.attr('src').replace(pcName, spName)).css({
          visibility: 'visible'
        });
      }
    }
    $(window).resize(function() {
      imgSize();
    });
    imgSize();
  });
});
