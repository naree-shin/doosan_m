$(function(){

	$('.bxslider').bxSlider({
		mode: "fade",
		auto: true,
		// nextText: "",
		// prevText: "",
		// infiniteLoop: true,
		// hideControlOnEnd: false,
		touchEnabled: false,
        oneToOneTouch: true,
        preventDefaultSwipeX: true, 
    	preventDefaultSwipeY: false,
		// preventDefaultSwipeX: true,
		// preventDefaultSwipeY: false,
		pager: true,
		nextSelector: $(".right"),
		prevSelector: $(".left"),
		
 	});


	$('.subSlide').bxSlider({
		nextText: "",
		prevText: "",
		slideWidth: 200,
	    slideMargin: 5,
	    minSlides: 1,
	    maxSlides: 4,
	    infiniteLoop: false,
	    pager: false
	    //moveSlides: 1

		// nextSelector: $(".right"),
		// prevSelector: $(".left")
	});

	// $(".hol").onclick(function(){
	// 	$(".hol").children().toggleClass("on");
	// });

	// $(".hol").on("click", function(){
	// 	$(this).children().toggleClass("on");
	// 	// $("div.slide2").hide();

	// });

	// $("ul.off").on("blur", function(){
	// 	$(this).removeClass("off");
	// 	$(this).addClass("on");
	// });

	// $("li.hol").hover(function(){
	// 	$("ul.off").toggleClass("on");
	// });

	$(".subSlide a").click(function(e){
		e.preventDefault();

	});

	$("li.hol").click(function(){
		$("li.hol > ul.on").slideToggle();
		$("li.hol h3").toggleClass("on");
	});

	$("li.inf").click(function(){
		$("li.inf > ul.on").slideToggle();
		$("li.inf h3").toggleClass("on");
	});
	$("li.con").click(function(){
		$("li.con > ul.on").slideToggle();
		$("li.con h3").toggleClass("on");
	});
	$("li.aff").click(function(){
		$("li.aff > ul.on").slideToggle();
		$("li.aff h3").toggleClass("on");
	});


	$(".s_btn").click(function(){
		$("input").toggle(); 
	});

	$(".btn1").click(function(){
		$("nav").css("right",0);
		$(".btn2").addClass("on");		
	});

	$("p.btn2").click(function(){
		$("nav").css("right","-100%");
		$(".btn2").removeClass("on");		

	});

	// $("p.btn1").click(function(){
	// 	$("p.btn2").css("right",0); 
	// });


	// $("li.on").on("click", function(){
	// 	$(this).addClass("active");
	// 	$(this).removeClass("on");
	// });

	// $("li.active").on("click", function(){
	// 	$(this).addClass("on");
	// 	$(this).removeClass("active");
	// });


	// $("ul.FF>li").click(function(){
	// 	$(".on").toggleClass("active");
	// });

	// $("ul.FF>li").click(function(){
	// 	$(this).children().toggleClass("active");
	// });

	
});

