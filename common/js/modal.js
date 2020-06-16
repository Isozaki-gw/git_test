//modal
$(function(){

  $('.modal_open').click(function(){

      $('#contents').append('<div class="modal_bg"></div>');

      $('.modal_bg').fadeIn('slow');


      var modal = '#' + $(this).attr('data-target');

      var current_scrollY;

      current_scrollY = $( window ).scrollTop();

      var windowWidth = window.innerWidth;

      if (windowWidth > 1025) {
        $( 'body , html' ).css( { position: 'fixed',  width: '100%',top: -1 * current_scrollY} );
      } else if (windowWidth > 768) {
        $( 'body , html' ).css( { position: 'fixed',  width: '100%',top: -1 * current_scrollY } );
      } else {
        $( 'body , html' ).css( { position: 'fixed',  width: '100%',top: -1 * current_scrollY } );
      }


      $(modal).fadeIn('slow');

      $('.modal,.modal_bg, .close_btn').off().click(function(){
        $('#contents').css({"position":"static",'width':' ','top':'0'}).prop( { scrollTop: current_scrollY } );
        $( 'body , html' ).attr( { style: '' } ).prop( { scrollTop: current_scrollY } );

          $(modal).fadeOut('slow');
          $('.modal_bg').fadeOut('slow',function(){
              $('.modal_bg').remove();
              $('.modalInner').css({'margin-left':''});
          });
      });

      $('.modalInner').on('click' , function(event){
        event.stopPropagation();
      });

  });
});