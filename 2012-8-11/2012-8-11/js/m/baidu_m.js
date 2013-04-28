function BaiduM()
{
	this.data=null;		//存储读取回来的数据
}

BaiduM.prototype.get=function (txt, fnCb)
{
	var _this=this;
	var oS=jsonp('baidu.php', {w: txt}, function (json){
		_this.data=json.s;
		fnCb();
		
		removeJson(oS);
	});
};