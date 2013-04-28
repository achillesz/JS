function WeiboC()
{
	this.m=new WeiboM();
	this.v=new WeiboV();
}

WeiboC.prototype.add=function ()
{
	var _this=this;
	
	var oTxt=document.getElementById('txt1');
	var oBtn=document.getElementById('btn1');
	
	oBtn.onclick=function ()
	{
		_this.m.add(oTxt.value, function (json){
			_this.v.add(oTxt.value, json.time, json.id);
		});
	};
};

WeiboC.prototype.get=function (page)
{
	var _this=this;
	
	this.m.get(page, function (arr){
		_this.v.get(arr);
	});
};

WeiboC.prototype.get_page_count=function ()
{
	var _this=this;
	
	this.m.get_page_count(function (json){
		_this.v.get_page_count(json);
	});
};