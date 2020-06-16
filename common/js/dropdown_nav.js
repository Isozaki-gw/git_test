/*===========================================================

  dropdown_nav.js
    ドロップダウンのJS、ホバーで動作
    2018.01.11

===========================================================*/

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
