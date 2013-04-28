function WeiboV(id)
{
	this.oDiv=document.getElementById(id);
}

WeiboV.prototype.add=function (content, time, id)
{
	var oNewDiv=document.createElement('div');
	
	oNewDiv.innerHTML=
		'<p>'+content+'</p>'+
		'<a href="javascript:;" class="ref">0</a>'+
		'<a href="javascript:;" class="acc">0</a>'+
		'<span class="time">'+time2date(time)+'</span>';
	
	if(this.oDiv.children.length)
	{
		this.oDiv.insertBefore(oNewDiv, this.oDiv.children[0]);
	}
	else
	{
		this.oDiv.appendChild(oNewDiv);
	}
	
	//多余删除
	if(oDiv.children.length>6)
	{
		oDiv.removeChild(oDiv.children[6]);
	}
};

WeiboV.prototype.get=function (arr)
{
	var oDiv=document.getElementById('div1');
	
	oDiv.innerHTML='';
	
	for(var i=0;i<arr.length;i++)
	{
		var oNewDiv=document.createElement('div');
		
		oNewDiv.innerHTML=
			'<p>'+arr[i].content+'</p>'+
			'<a href="javascript:;" class="ref">'+arr[i].ref+'</a>'+
			'<a href="javascript:;" class="acc">'+arr[i].acc+'</a>'+
			'<span class="time">'+time2date(arr[i].time)+'</span>';
		
		oDiv.appendChild(oNewDiv);
	}
};

WeiboV.prototype.get_page_count=function (json)
{
	var oPage=document.getElementById('page');
	
	for(var i=0;i<json.count;i++)
	{
		var oA=document.createElement('a');
		
		oA.href='javascript:;';
		oA.innerHTML=i+1;
		
		oPage.appendChild(oA);
	}
};









