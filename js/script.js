$(function(){
	/*하위 메뉴*/
	$("#gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
	});
	$("#gnb>li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});
	
	/*이미지fadeIn Out*/
	var cnt=1;

	setInterval(function(){
		$(".theme li").fadeOut();  
		cnt=cnt%4;
		console.log(cnt); 
		$(".theme li").eq(cnt).fadeIn(); 
		cnt++; 
	},5000);
	
	/*이미지 버튼 슬라이드*/
	 var n = 2;
     $('.imgwrap').css({left:-600});
     var img_count = $('.imgwrap li').last().index()+1;
     $('.right').click(function(){
        n++;
        if(n==6){
           $('.imgwrap').css({left:0});
           n=1; 
        }
        $('.imgwrap').stop(true).animate({left:-300*n});
     });
     
     
     $('.left').click(function(){
        n--;
        if(n==-1){
           $('.imgwrap').css({left:-300*(img_count-3)});  
           n=5;
        }
        $('.imgwrap').stop(true).animate({left:-300*n});
     });
     
     $('.event_hover').mouseover(function(){
        $(this).addClass('in');
     });
     
     $('.event_hover').mouseout(function(){
        $(this).removeClass('in');
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