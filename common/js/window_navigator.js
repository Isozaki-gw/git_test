/*===========================================================

  window_navigator.js
    環境をチェックするJS
    2018.01.11

===========================================================*/

$(function() {
  var $root = $('body'),
  $ua = navigator.userAgent;
  if ($ua.indexOf('iPhone') > 0 || $ua.indexOf('iPad') > 0 || $ua.indexOf('iPod') > 0) {
    $root.addClass('mobile ios');
  } else if ($ua.indexOf('Android') > 0) {
    $root.addClass('mobile android');
  } else if ($ua.indexOf('BlackBerry') > 0 || $ua.indexOf('windows Phone') > 0 || $ua.indexOf('NOKIA') > 0 || /Mobile.*Firefox/.test($ua)) {
    $root.addClass('mobile other');
  } else {
    if ($ua.indexOf('Mac') > 0) {
      $root.addClass('pc mac');
    } else if ($ua.indexOf('Win') > 0) {
      $root.addClass('pc win');
    }
  }
});
