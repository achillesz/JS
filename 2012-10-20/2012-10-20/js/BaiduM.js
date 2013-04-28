function BaiduM()	//后台数据交互
{
	
}

BaiduM.prototype.get=function (str, fnCallBack)
{
	var url='baidu.php?w='+str;
	
	jsonp(url, function (json){
		//alert();
		fnCallBack(json.s);
	});
};