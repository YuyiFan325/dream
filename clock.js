$(function() {

  $(window).scroll(function() {

    var massY = Math.min(20, 0.5+0.0005*$(this).scrollTop());

    $('.BGI').css('transform', 'scaleY(' + massY*2 + ')');
  });
});


$(document).ready(function(){
	$("span").click(function(){
		$("span"). toggleClass("active");
	});
});

$(document).ready(function(){
	$(".door").click(function(){
		$(".door2"). show("active");
	});
});




/*
$(document).ready(function(){
	$("#fullpage section:nth-child(10)").click(function(){
		$("#fullpage section:nth-child(10)").toggleClass("active");
	});
});

$(document).ready(function(){
	$("#fullpage section:nth-child(11)").click(function(){
		$("#fullpage section:nth-child(11)").toggleClass("active");
	});
});








$(document).ready(function(){
	$(".header").click(function(){
		$(".header").animate({
			opacity: "0.3",
			height: "10px",
			width: "15px",
		});
	});
});


$(document).ready(function(){
	$("p").click(function(){
		$("p").toggleClass("active");
	});
});

$(document).ready(function(){
	$("rightArrow").click(function(){
		var currentSlide = $(".header.active");
		var nextSlide = currentSlide.next();

		currentSlide.fadeOut(300).removeClass("active");
		nextSlide.fadeIn(300).addClass("active");
	});
});


$(document).ready(function(){
	$(".header").click(function(){
		$("body").toggleClass("dark");
		$(".eyeclock").fadeToggle(3000);
	});
});

$(document).ready(function(){
	$(".header").click(function(){
		$("main1").fadeToggle("active");
	});
});

$(document).ready(function(){
	$("button").click(function(){
		$("#main1").animate({
			left: "250px",
			opacity: "0.2",
			height: "150px",
			width: "150px"
		});
	});
});

*/