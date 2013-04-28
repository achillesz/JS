function WeiboM()
{
	this.addRes=null;
	this.pageCount=0;
	
	this.pageData=[];
}

WeiboM.prototype.add=function (content, cb)
{
	var _this=this;
	var url='weibo.php?'+json2url({
		act: 'add',
		content: content
	});
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		json.time=time2date(json.time);
		_this.addRes=json;
		
		if(cb)cb();
	});
};

WeiboM.prototype.getPage=function (cb)
{
	var _this=this;
	var url='weibo.php?'+json2url({
		act: 'get_page_count'
	});
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		_this.pageCount=json.count;
		
		if(cb)cb();
	});
};

WeiboM.prototype.get=function (page, cb)
{
	var _this=this;
	
	var url='weibo.php?'+json2url({
		act: 'get',
		page: page
	});
	
	ajax(url, function (str){
		var arr=eval(str);
		
		for(var i=0;i<arr.length;i++)
		{
			arr[i].time=time2date(arr[i].time);
		}
		_this.pageData=arr;
		
		if(cb)cb();
	});
};


