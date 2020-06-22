$(function(){
	/*하위 메뉴*/
	$("#gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
	});
	$("#gnb>li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});
	/*카테고리 메뉴*/
	$(".category>li").mouseenter(function(){
		$(this).children(".suv").show();
	});
	$(".category>li").mouseleave(function(){
		$(this).children(".suv").hide();
	});
	
	/*버튼 클릭시 맨 위페이지로 이동*/
	$("img#top").click(function(){
		var aa = $("#wrapper").offset().top;
		console.log(aa);
		$("html,body").animate({"scrollTop":aa},500);
	});
	
	
	$(window).on("scroll", function(){ 
		var winScrollTop = $(window).scrollTop();
		console.log(winScrollTop);
		$('img#top').stop().animate({top:winScrollTop+"px"},1000 );	
		
		if(winScrollTop>=0 && winScrollTop<400) {
			$("img#top").css({opacity:0});
		} else if(winScrollTop>=400) {
			$("img#top").css({opacity:1});
		}		
	/**/
	});
});





















