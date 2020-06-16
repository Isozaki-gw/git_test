/*===========================================================

  plugin_switch.js
    プラグインの動作スイッチ
    2018.01.12

===========================================================*/


/*--------------------------------------------
  $matchHeight.js
--------------------------------------------*/
//要素の高さを揃える

$(function(){
  if($('.matchHeight').length){
      $('.matchHeight').matchHeight();
    }
});


/*--------------------------------------------
  $mCustomScrollbar.js
--------------------------------------------*/
//スクロールバーのデザインをカスタムする
//（使用例：プライバシーポリシー）

$(function(){
  if($('.custom_window').length){
    $(".scroll_window1").mCustomScrollbar();
  }
});

//  ■必要なもの
//  jquery.mCustomScrollbar.min.css　※忘れやすい
//  jquery.mCustomScrollbar.concat.min.js
//  jquery.mousewheel.js
//  調整用css（/privacy/css/style.cssに記述あり）
