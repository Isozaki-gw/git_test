/*
・window_navigator.js
//環境をチェックするJS

・js_img_switch.js
//ウィンドウサイズによって画像を入れ替えるJS

・scrollbar.js
//PCのとき、一定の高さを過ぎると追従するようになるJS

・scroll_top.js
//スクロールトップ

・common.js
//matchHeightのJSなどが入っている

・window_size.js
//ウィンドウサイズによってbodyにつけるクラス名を変更するJS

・dropdown_nav.js
//ドロップダウンのJS、ホバーで動作

・hamburger_nav.js
//ハンバーガーメニューのJS、出ているとき背景固定

・scroll_top_stop.js
//スクロールトップがfooterの上あたりなどで止まるJS
*/


//要素の高さを揃える

$(function(){
  if($('.matchHeight').length){
      $('.matchHeight').matchHeight();
    }
});

//PCSPをウィンドウサイズで分ける
//PC pcWin SP spWin
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

//ドロップダウンメニュー
$(function(){

  var body = $('body');

  //pc
  var con = $('#contents');
  var pcNav = con.find('#nav');
  var pcNavLi = pcNav.find('li');
  var pcNavLi_ul = pcNavLi.find('ul');
  var op = pcNav.find('.op');
  pcNavLi_ul.css('display','none');

  //PC開閉
  op.hover(function(){
      $(this).find('a').next('ul').stop(true,true).slideDown('fast');
    }, function(){
      $(this).find('a').next('ul').stop(true,true).slideUp('fast');
  });

});

//ハンバーガーメニュー
$(function(){

  var body = $('body');

  //sp
  var header = $('#header');
  var spNav = header.find('nav');//出てくるメニュー
  var spBtn = $('.navOpen');//ハンバーガーボタン
  spNav.css('display','none');

  //オーバーレイ
  var bg = $('.layer');

  //スクロールの値
  var current_scrollY;

  spBtn.on('click',function(){

    if(body.hasClass('spWin')) {

      if(!spBtn.hasClass('active')){
        nav_open(spBtn,spNav,bg);
      }else{
        nav_close(spBtn,spNav,bg);
      }
    }
  });

  //オーバーレイを押したときの挙動
  bg.on('click',function(){

    if(body.hasClass('spWin')) {
      if(!spBtn.hasClass('active')){
        return;
      }else{
        nav_close(spBtn,spNav,bg);
      }
    }
  });

  function nav_open(spBtn_,spNav_,bg_){
    current_scrollY = $( window ).scrollTop();
    spBtn_.addClass('active');
    spNav_.stop(true,true).slideDown();
    bg_.stop(true,true).fadeIn();

    $('#wrapper').css({ position: 'fixed', width: '100%',top: -1 * current_scrollY});
  }

  function nav_close(spBtn_,spNav_,bg_){
    spBtn_.removeClass('active');
    spNav_.stop(true,true).slideUp();
    bg_.stop(true,true).fadeOut();
    $('#wrapper').css({"position":"static",'width':' ','top':'0'}).prop( { scrollTop: current_scrollY } );
    $( 'body , html' ).attr( { style: '' } ).prop( { scrollTop: current_scrollY } );
  }

});

//pagetopが途中で止まる挙動

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
