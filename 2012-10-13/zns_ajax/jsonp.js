function jsonp(url, fnSucc)
{
	//1.函数变成全局
	window.succ=fnSucc;
	
	//2.jsonp
	var oS=document.createElement('script');
	
	oS.type='text/javascript';
	oS.src=url;
	
	document.body.appendChild(oS);
}