function BaiduC()
{
	this.m=new BaiduM();
	this.v=new BaiduV();
}

BaiduC.prototype.query=function (sTxt)
{
	var _this=this;
	
	this.m.get(sTxt, function (){
		_this.v.createList(_this.m.data);
	});
};