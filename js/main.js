require.config({
	baseUrl:'js/lib',
	paths:{
		jquery:'jquery-2.0.3.min'
	}
});

require(['jquery'],function($){
	//拖动图块
	var mouseX=0,originalX=0;
	var mm=function(e){
		var delta=e.screenX-mouseX;
		var cur=originalX+delta;
		$('#item-container ul').css('left',cur+'px');
		$('.item-content').unbind("click",gotoSubpage);
	};
	var mu=function(e){
		console.log("up");
		$('.item-content').unbind("mousemove",mm);
		$(window).unbind("mouseup",mu);
	};
	$('.item-content').mousedown(function(e){
		mouseX=e.screenX;
		originalX=parseInt($('#item-container ul').css('left'));
		$('.item-content').bind("mousemove",mm);
		$(window).bind("mouseup",mu);

		//绑定click事件
		$('.item-content').bind('click',gotoSubpage);
	});

	//hover图块
	$('.item-content').mouseenter(function(e){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		var name=$(this).attr('data-name');
		$('#detail h3').text(name);
		return false;
	});

	//获取更多信息
	$('#toggle').click(function(){
		var foot=$('footer');
		var h=parseInt(foot.css('height'));
		var h2=$(window).height();
		var delta=Math.abs(h-h2*0.16);
		console.log(h+" "+h2+" "+delta);
		if(delta<2){
			foot.css({'height':'26vh'});
			$('#toggle span').css('transform','rotate(180deg)');
			$('#detail p').css('opacity','0');
			$('#detail ul').css('top','76px');
		}
		else{
			foot.css({'height':'16vh'});
			$('#toggle span').css('transform','rotate(360deg)');
			$('#detail ul').css('top','300px');
			$('#detail p').css('opacity','1');
		}
	});

	//去子页面
	var gotoSubpage=function(e){
		var title=e.target.getAttribute('data-name');
		console.log(title);
		if(title==='设备简介'){
			window.location='device.html';
		}
	}
});