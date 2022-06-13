/*$(document).ready(function(){
  $(".fingers1").mouseenter(function(){
  	$(".fingers1").css("display", "none"),
  	$(".shiftOne").css("display", "inline")
    /*$(".shiftOne").css("transform", "rotate(-90deg)");
  });
  
  $(".fingers1").mouseleave(function(){
    $(".fingers1").css("display", "none"),
  	$(".shiftOne").css("display", "inline")
    /*$(".shiftOne").css("transform", "rotate(-90deg)");
  });
});



$(document).ready(function(){
  $(".fingers2").mouseenter(function(){
  	$(".fingers2").css("display", "none"),
  	$(".shiftTwo").css("display", "inline")
    /*$(".shiftTwo").css("transform", "rotate(-90deg)");
  });
  
  $(".fingers2").mouseleave(function(){
  	$(".fingers2").css("display", "none"),
  	$(".shiftTwo").css("display", "inline")
    /*$(".shiftTwo").css("transform", "rotate(-90deg)");
  });
});

$(document).ready(function(){
  $(".fingers3").mouseenter(function(){
  	$(".fingers3").css("display", "none"),
  	$(".three").css("display", "inline")
    /*$(".three").css("transform", "rotate(-90deg)");
  });
  
  $(".fingers3").mouseleave(function(){
  	$(".fingers3").css("display", "none"),
  	$(".three").css("display", "inline")
    /*$(".three").css("transform", "rotate(-90deg)");
  });
});

$(document).ready(function(){
  $(".fingers4").mouseenter(function(){
  	$(".fingers4").css("display", "none"),
  	$(".four").css("display", "inline")
    /*$(".four").css("transform", "rotate(-90deg)");
  });
  
  $(".fingers4").mouseleave(function(){
  	$(".fingers4").css("display", "none"),
  	$(".four").css("display", "inline")
    /*$(".four").css("transform", "rotate(-90deg)");
  });
});

$(document).ready(function(){
  $(".fingers5").mouseenter(function(){
  	$(".fingers5").css("display", "none"),
  	$(".five").css("display", "inline")
    /*$(".five").css("transform", "rotate(-90deg)");
  });
  
  $(".fingers5").mouseleave(function(){
  	$(".fingers5").css("display", "none"),
  	$(".five").css("display", "inline")
    /*$(".five").css("transform", "rotate(-90deg)");
  });
});
*/

$(function() {

  $(window).scroll(function() {

    var massY = Math.min(20, 0.02+0.00005*$(this).scrollTop());

    $('.number').css('transform', 'scale(' + massY*40 + ')');
  });
});
