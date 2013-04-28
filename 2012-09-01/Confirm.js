function Confirm(str)
{
	MyAlert.call(this, '', str);
}

extend(MyAlert, Confirm);

Confirm.prototype._create=function ()		//
{
	var _this=this;
	this.parentFn._create.call(this);	//先执行父级的方法
	
	//执行自己的方法
	var oDiv=this.div.getElementsByTagName('div')[0];
	
	oDiv.innerHTML=
		'<input type="button" value="确定" />'+
		'<input type="button" value="取消" />';
	
	oDiv.getElementsByTagName('input')[0].onclick=function ()
	{
		//确定
		_this.close();
		
		if(_this.onok)
		{
			_this.onok();
		}
	};
	
	oDiv.getElementsByTagName('input')[1].onclick=function ()
	{
		_this.close();
		if(_this.oncancel)
		{
			_this.oncancel();
		}
	};
};

var _confirm=window.confirm;

confirm=function (msg, fnOk, fnCancel)
{
	var oC=new Confirm(msg);
	
	oC.onok=fnOk;
	oC.oncancel=fnCancel;
	
	oC.show();
};

