function Alert(str)
{
	MyAlert.call(this, '', str);
}

extend(MyAlert, Alert);

Alert.prototype._create=function ()		//
{
	var _this=this;
	//_alert(this.parentFn._create==this._create);
	//this.parentFn._create.call(this);	//先执行父级的方法
	MyAlert.prototype._create.call(this);
	
	//执行自己的方法
	var oDiv=this.div.getElementsByTagName('div')[0];
	
	oDiv.innerHTML='<input type="button" value="确定" />';
	
	oDiv.getElementsByTagName('input')[0].onclick=function ()
	{
		_this.close();
	};
};

var _alert=window.alert;
alert=function (msg)
{
	var oA=new Alert(msg);
	
	oA.show();
}

