function jsonp(url, fnSucc)
{
	var name=('jsonp_'+Math.random()).replace(/0\./, '');
	//1.函数变成全局
	window[name]=fnSucc;
	
	url+='&callback='+name;
	
	//2.jsonp
	var oS=document.createElement('script');
	
	oS.type='text/javascript';
	oS.src=url;
	
	document.body.appendChild(oS);
	
	//3.信息返回
	return {s: oS, name: name};
}

function removeJsonp(ret)
{
	document.body.removeChild(ret.s);
	window[ret.name]=null;
}