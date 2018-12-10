//导航下划线
$("nav li a").hover(function() {
	$(this).parent().append(
		$("<div></div>").css({
			"width": "25%",
			"height": "3px",
			"backgroundColor": "#C30E19",
			"display": "none",
			"position": "absolute",
			"bottom": "0",
			"left": "37.5%",
		}));
	$(this).parent().children("div").slideDown(300);
}, function() {
	$(this).parent().children("div").slideUp(300, function() {
		$(this).remove();
	});
})

//背景图颜色

var bg = 100;
var temp;
setInterval(function() {
	if(bg == 0) {
		temp = 1;
	} else if(bg == 100) {
		temp = -1;
	}
	$("#section>video").css("filter", "grayscale(" + bg + "%)")
	bg += temp;
}, 50);

//图标1缓冲
var tempF = 0;
setInterval(function() {
	if(tempF == 360) {
		tempF = 0;
	}
	$("#sec-con-one").css("transform", "rotate(" + tempF + "deg)")
	tempF++;
}, 50)
//图标2缓冲
var turn = true;
setInterval(function() {
	if(turn) {
		$("#sec-con-two").animate({
			"margin-top": "40px"
		}, 1000);
		turn = !turn;
	} else {
		$("#sec-con-two").animate({
			"margin-top": "10px"
		}, 1000);
		turn = !turn;
	}
}, 1000)

//导航条变色
var delta;
$(document).scroll(function() {
	if($(document).scrollTop() > $("#section").height() - $("header").height()) {
		$("header").css({
			"backgroundColor": "white",
			"width": "100%",
			"left": "0",
			"height": "4vw"
		});
		$("header h3").css({
			"paddingTop": "10px",
			"width": "20%",
			"marginLeft": "20%"
		});
		$("header nav").css({
			"width": "30%",
			"paddingTop": "30px"
		})
		$("header h3 img").hide().attr("src", "img/logo.png").show();
		$("header h3 p").css("color", "#C30E19");
		$("header>nav li a").css("color", "#C30E19");
	} else {
		$("header").css({
			"backgroundColor": "transparent",
			"width": "76%",
			"left": "13%",
			"height": "5vw"
		});
		$("header h3").css({
			"paddingTop": "15px",
			"width": "20%",
			"marginLeft": "13%"
		});
		$("header nav").css({
			"width": "50%",
			"paddingTop": "40px"
		})
		$("header h3 img").hide().attr("src", "img/logo2.png").show();
		$("header h3 p").css("color", "white");
		$("header>nav li a").css("color", "white")
	}
})

$("#sec-con-two").click(function() {
	$("body").animate({
		"scrollTop": $("#section").height()
	}, 1100);
	console.log($("#section").height());
})

//上移(优化)
//$(document).on("mousewheel DOMMouseScroll", function(e) {
//	delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//	(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
//	if(delta > 0) {
//	// 向上滚
//		$("header").slideDown("slow");
//	} else if(delta < 0) {
//		// 向下滚
//		$("header").slideUp("slow");
//	}
//});