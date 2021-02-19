$(document).ready(function(){
	$('#fullpage').fullpage();
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

/*
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
*/