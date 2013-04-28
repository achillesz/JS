function jsonp(url, data, fnSucc)
{
	var sCallBack=url.replace(/\W/g, '_')+parseInt(Math.random()*10000);
	
	//让匿名函数变成一个全局函数（Jsonp只能调用全局函数）
	window[sCallBack]=fnSucc;
	
	//用于告诉后台，要回调哪个函数
	data.callback=sCallBack;
	//防止缓存
	data.t=new Date().getTime();
	
	//创建script标签
	var oS=document.createElement('script');
	oS.type='text/javascript';
	oS.src=url+'?'+json2url(data);
	
	document.body.appendChild(oS);
	
	return {s: oS, name: sCallBack};
}

function removeJsonp(obj)
{
	document.body.removeChild(obj.s);
	window[name]=null;
}