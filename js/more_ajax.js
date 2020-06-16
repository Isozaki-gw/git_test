/*------------------------------------
もっとみる　10件ずつ表示
------------------------------------*/
var flag = false;

$(function(){
  var btn = $('.moreBtn');
  var jsonUrl;
  var page = 0;//最初に読み込む
  $('.news__list').empty();
  newsList('first',btn);

  btn.on('click',function(){
    var itemslength = $('.news__item').length;
    if(!itemslength){
      newsList('first',$(this));
    }else{
      newsList('other',$(this));
    }
  });

  function newsList(timing_,this_){
    if(timing_ == 'first'){
      page = 1;
    }else{
    }

    flag = true;
    $('.error').remove();

    if(!flag){
      return;
    }
    var area = this_.prev('ul');

    area.after('<div class="loading"><img src="/common/img/tagindex/detail/loading.gif" alt="Now Loading"></div>');

    var pege;

    var tag = $('#newsTag').val();
    var dataHref ="";

    dataHref += "/tagindex/d_news?tag=" + tag + "&page=" + page;


    $.ajax({
      url:dataHref,
      dataType:'json',
      timeout:10000,
    }).done(function(data) {
      var res = data.res;
      var max_page = data.max_page;
      var max_page_02 = data.max_page + 1;
      var cur_page = data.cur_page;
      var err_message = data.err_message;
      var items = data.items.length;//アイテムの数（記事の数）
      var readPage = items;//読み込む記事数(今はitemsに入ってる記事の分だけ表示)


      setTimeout(function(){
        $('.loading').fadeOut().remove();

        if(res == true){

          function listItem(id_,url_,date_,title_,time_){
            $('<li class="news__item plusitem" data-id="'+ id_ +'"><a href="' + url_ + '" class="hover"><p class="date">' + date_ + '</p>'+ title_ + '</a></li>').appendTo(area).css({opacity:'0'}).delay(time_ * i).animate({opacity:'1'},500);
          }

            if(timing_ == 'first'){
              var time =0;
            }else{
              var time =50;
            }

            for(var i=0;i < readPage; i++){
              var j;
              listItem(data["items"][i].id,data["items"][i].url,data["items"][i].date,data["items"][i].title,time);

            }
            page++;
            if(page == max_page_02 || page >= max_page_02){//pageの数がリクエストされた条件で応答可能な最大ページを超えたら、「もっと見る」を消す
              area.next('.moreBtn').remove();
            }


          }
        },800);
      }).fail(function(data) {
        setTimeout(function(){
          $('.loading').fadeOut().remove();
          area.after('<div class="error">取得できませんでした。</div>');
        },500);

      }).always(function(){
        flag = false;
      });
    }

  });
