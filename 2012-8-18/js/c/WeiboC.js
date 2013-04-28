function WeiboC()
{
	this.m=new WeiboM();
	this.v=new WeiboV();
}

WeiboC.prototype.add=function (content, cb)
{
	var _this=this;
	
	this.m.add(content, function (){
		_this.v.add(_this.m.addRes.time, content);
		
		if(cb)cb();
	});
};

WeiboC.prototype.getPage=function ()
{
	var _this=this;
	
	this.m.getPage(function (){
		_this.v.getPage(_this.m.pageCount);
	});
};

WeiboC.prototype.get=function (n)
{
	var _this=this;
	this.m.get(n, function (){
		_this.v.get(_this.m.pageData);
	});
};