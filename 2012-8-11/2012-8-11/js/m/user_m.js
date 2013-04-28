function UserM()
{
	this.data=null;		//存储从后台读来的东西
}

UserM.prototype.reg=function (userName, pass, callBack)
{
	var _this=this;
	var url='user.php?'+json2url({
		act: 'reg',
		user: userName,
		pass: pass
	});
	
	ajax(url, function (str){
		var json=eval('('+str+')');
		
		_this.data=json;
		callBack();
	});
};