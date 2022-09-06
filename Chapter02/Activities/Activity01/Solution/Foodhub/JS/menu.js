$(document).ready(
 
  function () {
    
    $('.nav li').hover(
      function () { 
        $('ul', this).fadeIn();
      },
      function () { 
        $('ul', this).fadeOut();
      }
    );
  }
);
$(document).ready(function(){
    $('#l1').on('mouseenter', function(evt){
        $('.popup#imgpop').css({left: evt.pageX+50, top: evt.pageY-115}).show();
        $(this).on('mouseleave', function(){
            $('.popup#imgpop').hide();
        });
    });
});
