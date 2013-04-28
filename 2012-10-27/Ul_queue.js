function Ul2()
{
	var _this=this;
	
	MyObject.call(this);
	
	this.get();
}

(function (){
	for(var i in MyObject.prototype)
	{
		Ul2.prototype[i]=MyObject.prototype[i];
	}
})();

Ul2.prototype.get=function ()
{
	setInterval(function (){
		var oUl=document.getElementById('ul2');
		
		var obj=createObj();
		var arr=obj.get();
		
		oUl.innerHTML='';
		
		for(var i=0;i<arr.length;i++)
		{
			var oLi=document.createElement('li');
			
			oLi.innerHTML=arr[i].user+','+arr[i].pass;
			
			oUl.appendChild(oLi);
		}
	}, 2000);
};