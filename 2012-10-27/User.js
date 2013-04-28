function User()
{
	MyObject.call(this);
}

(function (){
	for(var i in MyObject.prototype)
	{
		User.prototype[i]=MyObject.prototype[i];
	}
})();

User.prototype.reg=function (user, pass)
{
	var obj=createObj();
	
	//功能代码
	obj.add({user: user, pass: pass});
	
	//通知
	this.notify('reg');
};