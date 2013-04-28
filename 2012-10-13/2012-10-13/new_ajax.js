function ajax(url, fnSucc, fnFaild)
{
	//1.创建ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接到服务器
	//open(方法, 地址, 异步传输)
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收返回信息
	oAjax.onreadystatechange=function ()	//当服务器和ajax之间有通信的时候
	{
		if(oAjax.readyState==4)	//通信完成
		{
			if(oAjax.status==200)	//是否成功
			{
				//alert('成功'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFaild)fnFaild();
				//alert('失败：'+oAjax.status);
			}
		}
	};
}