
$(document).ready(function(){
	//广告
	if ( document.getElementById("showAd") ) {
		var shShow = function(){
			$("#showAd").animate({"width":"69px"},120);
		};
		$("#showAd").on("click", "a.closeAd", function() {
			$("#showAd").animate({width: "0px"}, 120)
		}).on("click", function() {
			$("#showAd").animate({"width":"0px"},120,function(){
			});
		});
		setTimeout(function() {
			shShow();}, 120);	};


	$(".navs a").click(function(){
	//不加任何事件的选中
		$(".navs a").filter(".cur").removeClass("cur");
		$(this).addClass("cur");
		});
	//去掉最后一个border
	$(".navs li:last").addClass("del_bor");
	var wWi = $(window).width();
	$("#focus ul li").css({'width':wWi})
});
$(window).resize( function (){
	var wWi = $(window).width();
	$("#focus ul li").css({'width':wWi})
});


$(function() {
	var sWidth = $("#focuss").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focuss ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;

	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focuss").append(btn);
	$("#focuss .btnBg").css("opacity",0.5);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focuss .btn span").mouseenter(function() {
		index = $("#focuss .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focuss ul").css("width",sWidth * (len));

	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focuss").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");

	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focuss ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focuss .btn span").stop(true,false).addClass("s").removeClass("a").eq(index).stop(true,false).addClass("a").removeClass("s"); //为当前的按钮切换到选中的效果
	}
});


var currentindex=1;
$("#flashBg").css("background-color",$("#flash1").attr("name"));
function changeflash(i) {
currentindex=i;
for (j=1;j<=4;j++){
	if (j==i)
	//{$("#flash"+j).fadeIn("normal");
	{$("#flash"+j).fadeIn(1500);
	$("#flash"+j).css("display","block");
	$("#f"+j).removeClass();
	$("#f"+j).addClass("dq");
	$("#flashBg").css("background-color",$("#flash"+j).attr("name"));
	}
	else
	{
	$("#flash"+j).fadeOut(1500);
	//$("#flash"+j).css("display","none");
	$("#f"+j).removeClass();
	$("#f"+j).addClass("no");}
}}
function startAm(){
timerID = setInterval("timer_tick()",10000);
}
function stopAm(){
clearInterval(timerID);
}
function timer_tick() {
    currentindex=currentindex>=4?1:currentindex+1;
	changeflash(currentindex);}
$(document).ready(function(){
$(".flash_bar div").mouseover(function(){stopAm();}).mouseout(function(){startAm();});
startAm();
});