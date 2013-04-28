function setCookie(name, value, iDay)
{
	if(iDay!==false)
	{
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		
		document.cookie=name+'='+value+';expires='+oDate;
	}
	else
	{
		document.cookie=name+'='+value;
	}
}

function getCookie(name)
{
	var arr=document.cookie.split('; ');
	var i=0;
	
	for(i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}

function removeCookie(name)
{
	setCookie(name, 'a', -1);
}

function json2url(json)
{
	var arr=[];
	
	for(var i in json)
	{
		arr.push(i+'='+json[i]);
	}
	
	arr.push('t='+new Date().getTime());
	
	return arr.join('&');
}

function time2date(t)
{
	function toDou(n)
	{
		return n<10?'0'+n:''+n;
	}
	var oDate=new Date();
	
	oDate.setTime(t*1000);
	
	return oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+toDou(oDate.getDate())+' '+toDou(oDate.getHours())+':'+toDou(oDate.getMinutes());
}

function format(str, json)
{
	return str.replace(/{\w+}/g, function (str){
		str=str.substring(1,str.length-1);
		
		return json[str];
	});
}