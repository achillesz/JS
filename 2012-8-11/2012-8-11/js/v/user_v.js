function UserV()
{
	
}

UserV.prototype.showRegOk=function ()
{
	document.getElementById('div1').innerHTML='注册成功';
};

UserV.prototype.showRegError=function ()
{
	var oDiv=document.getElementById('div1');
	oDiv.innerHTML='失败了';
	oDiv.style.color='red';
};