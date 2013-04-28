function UserC()
{
	this.m=new UserM();
	this.v=new UserV();
}

UserC.prototype.regUser=function ()
{
	var _this=this;
	var oTxtUser=document.getElementById('add_user');
	var oTxtPass=document.getElementById('add_pass');
	
	this.m.reg(oTxtUser.value, oTxtPass.value, function (){
		if(_this.m.data.error)
		{
			_this.v.showRegError();
		}
		else
		{
			_this.v.showRegOk();
		}
	});
};