/*===========================================================

  facebook_resize.js
    フェイスブック用リサイズJS　500pxまで
    2018.01.12

===========================================================*/

//facebookリサイズ対応　500pxまで
$(function () {
    var windowWidth = $(window).width();
    var htmlStr = $('#pageplugin').html();
    var timer = null;
    $(window).on('resize',function() {
        var resizedWidth = $(window).width();
        if(windowWidth != resizedWidth || resizedWidth < 500) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                $('#pageplugin').html(htmlStr);
                window.FB.XFBML.parse();
　　　　　　　　　　　//window.FB.XFBML.parse()で再レンダリングします。
                var windowWidth = $(window).width();
            }, 500);
        }
    });
});
