$(function(){
	$(".top ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
	
	//手风琴
	function accordion(hove,add,hpx){
		$(hove).hover(function(){
			$(this).addClass("active").siblings().removeClass("active");	
			//$(this).stop().animate({width:"562px"}).addClass("active").siblings().stop().animate({width:hpx}).addClass(add).removeClass("active");
		},function(){
			$(this).addClass("active").siblings().removeClass("active");	
			//$(this).stop().animate({width:"562px"}).addClass("active").siblings().stop().animate({width:hpx}).addClass(add).removeClass("active");
		});
	}
	accordion(".accordion-hover1 ul li","onlive","150px");
	accordion(".accordion-hover2 ul li","ontwo","200px");
	$(".contact-time ul li:last").find("i").hide();
	
	$(".list-n-list h3").hover(function(){
		$(this).siblings("em").addClass("on");
	},function(){
		$(this).siblings("em").removeClass("on");
	});
	
	var url = window.location.href;
	var length  = url.split("/").length;
	var urlLast = url.split("/")[length - 1];
	var indexI0 = $(".top ul li").eq(0).find("a").attr("href");	//首页
	var indexI1 = $(".top ul li").eq(1).find("a").attr("href");	//共享汽车
	var indexI2 = $(".top ul li").eq(2).find("a").attr("href");	//新能源汽车
	var indexI3 = $(".top ul li").eq(3).find("a").attr("href");	//宝港服务
	var indexI4 = $(".top ul li").eq(4).find("a").attr("href");	//新闻资讯
	var indexI5 = $(".top ul li").eq(5).find("a").attr("href");	//联系我们
	
	//console.log(length +"url的长度");
	console.log( urlLast +"本地地址");
	console.log( $(".top ul li").eq(0).find("a").attr("href") + "首页的地址");
	console.log( $(".top ul li").eq(1).find("a").attr("href") + "共享汽车");
	console.log( $(".top ul li").eq(2).find("a").attr("href") + "新能源汽车");
	console.log( $(".top ul li").eq(3).find("a").attr("href") + "宝港服务");
	console.log( $(".top ul li").eq(4).find("a").attr("href") + "新闻资讯");
	console.log( $(".top ul li").eq(5).find("a").attr("href") + "联系我们");
	
	if(urlLast == indexI3){
		$(".top ul li").eq(3).addClass("active");
		console.log("宝港服务");
	}else if(urlLast == indexI2){
		$(".top ul li").eq(2).addClass("active");
		console.log("新能源汽车");
	}else if(urlLast == indexI1){
		$(".top ul li").eq(1).addClass("active");
		console.log("共享汽车");
	}else if(urlLast == indexI4){
		$(".top ul li").eq(4).addClass("active");
		console.log("新闻资讯");
	}else if(urlLast == indexI5){
		$(".top ul li").eq(5).addClass("active");
		console.log("联系我们");
	}else{
		$(".top ul li").eq(0).addClass("active");
		console.log("不是宝港服务");	
	}
});