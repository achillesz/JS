function Ul(user)
{
	var _this=this;
	
	MyObject.call(this);
	
	user.addListener('reg', function (){
		_this.get();
	});
}

(function (){
	for(var i in MyObject.prototype)
	{
		Ul.prototype[i]=MyObject.prototype[i];
	}
})();

Ul.prototype.get=function ()
{
	var oUl=document.getElementById('ul1');
	
	var obj=createObj();
	var arr=obj.get();
	
	oUl.innerHTML='';
	
	for(var i=0;i<arr.length;i++)
	{
		var oLi=document.createElement('li');
		
		oLi.innerHTML=arr[i].user+','+arr[i].pass;
		
		oUl.appendChild(oLi);
	}
};