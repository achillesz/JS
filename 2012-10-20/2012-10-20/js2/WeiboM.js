function WeiboM()
{
	
}

WeiboM.prototype.add=function (content, fnEnd)
{
	var url='weibo.php?act=add&content='+content;
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		fnEnd(json);
	});
};

WeiboM.prototype.get=function (page, fnEnd)
{
	var url='weibo.php?act=get&page='+page;
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		fnEnd(json);
	});
};

WeiboM.prototype.get_page_count=function (fnEnd)
{
	var url='weibo.php?act=get_page_count';
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		fnEnd(json);
	});
};