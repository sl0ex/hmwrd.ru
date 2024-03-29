document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000,
  });
});

allDiv=3;
function showDv(n){
    for(i=1;allDiv+1>i;i++){
    document.getElementById('d'+i).style.visibility = 'hidden';
    }
    document.getElementById('d'+n).style.visibility = 'visible';
};

$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.container-message').css({display:'block'});
      $('.form').css({display:'none'});
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

function lockScroll(){
  if (true  ) {}
    $html = $('html'); 
    $body = $('body'); 
    $mobOv = $('#mobile-overlay');

    if ($body.css('overflow') == 'hidden') {
      $body.css({'margin-right': marginR,'margin-bottom': marginB});
      $body.css('overflow', $body.data('previous-overflow'));
      $mobOv.css('display', 'none');
      var scrollPosition = $html.data('scroll-position');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);    

      $body.css({'margin-right': 0, 'margin-bottom': 0});
    }
    else{
      var initWidth = $body.outerWidth();
      var initHeight = $body.outerHeight();

      var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      $html.data('scroll-position', scrollPosition);
      $body.data('previous-overflow', $html.css('overflow'));
      $body.css('overflow', 'hidden');
      $mobOv.css('display', 'block');

      window.scrollTo(scrollPosition[0], scrollPosition[1]);   

      var marginR = $body.outerWidth()-initWidth;
      var marginB = $body.outerHeight()-initHeight; 
    }
    
};

function unlockScrollForAppartments(){
  lockScroll();
  window.location.href = "index.html#apartments";
  lockScroll();
}

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});


function noDigits(event) {
  if ("1234567890-_/.,?<>|!#@^:;()".indexOf(event.key) != -1)
    event.preventDefault();
};

function noABC(event) {
  if ("qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюё-_/.,?<>|!#@^:;()".indexOf(event.key) != -1)
    event.preventDefault();
};
function noRUSABC(event) {
  if ("йцукенгшщзхъфывапролджэячсмитьбюё/,?<>|!#^:;()".indexOf(event.key) != -1)
    event.preventDefault();
};

/*var dateStart = document.getElementById("start");
var dateEnd = document.getElementById("end"); 
dateStart.min = new Date().toISOString().split(".")[0];
dateEnd.min = new Date().toISOString().split(".")[0];*/