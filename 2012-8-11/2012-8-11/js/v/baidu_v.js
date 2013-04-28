function BaiduV()
{
	
}

BaiduV.prototype.createList=function (aData)
{
	var oUl=document.getElementById('ul1');
	oUl.innerHTML='';
	
	for(var i=0;i<aData.length;i++)
	{
		var oLi=document.createElement('li');
		
		oLi.innerHTML=aData[i];
		
		oUl.appendChild(oLi);
		
		oLi.onmouseover=function ()
		{
			this.style.background='#CCC';
		};
		oLi.onmouseout=function ()
		{
			this.style.background='';
		};
	}
};