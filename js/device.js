require.config({
	baseUrl:'js/lib',
	paths:{
		jquery:'jquery-2.0.3.min'
	}
});

require(['jquery'],function($){
	var getDetail=function(e){
		var tmp=$(e.target).parent('.item');
		var name=tmp.attr('data-name');
		var src=tmp.children('img').attr('src');
		console.log(name+src);
		$('#pop-box').css('display','block');
		$('#title h3').text(name+'设备');
	};
	$('.item img').bind('click',getDetail);
	$('#close').click(function(){
		console.log('close');
		$('#pop-box').css('display','none');
	});
});