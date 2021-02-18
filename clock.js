$(document).ready(function(){
	$(".header").click(function(){
		$(".header").animate({
			opacity: "0.3",
			height: "10px",
			width: "15px",
		}),
		$(".header").toggleClass(".header");
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
	$("button").click(function(){
		$(".main1").animate({
			left: "250px",
			opacity: "0.2",
			height: "150px",
			width: "150px"
		});
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

*/