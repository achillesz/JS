function WeiboV()
{
	this.div=document.getElementById('div1');
	this.page=document.getElementById('page');
	this.nowPage=1;
}

WeiboV.prototype.add=function (time, content)
{
	var oNewDiv=document.createElement('div');
	
	oNewDiv.innerHTML=format(
		'<p>{content}</p>'+
		'<a href="javascript:;" class="ref">0</a>'+
		'<a href="javascript:;" class="acc">0</a>'+
		'<span class="time">{time}</span>',
		{content: content, time: time}
	);
		
	this.div.insertBefore(oNewDiv, this.div.firstChild);
};

WeiboV.prototype.getPage=function (count)
{
	this.page.innerHTML='';
	
	for(var i=0;i<count;i++)
	{
		var oA=document.createElement('a');
		
		if(this.nowPage==i)
		{
			oA.className='active';
			
			oA.href='javascript:;';
			oA.innerHTML=i;
			
			this.page.appendChild(oA);
		}
	}
};

WeiboV.prototype.get=function(data)
{
	this.div.innerHTML='';
	
	for(var i=0;i<data.length;i++)
	{
		var oNewDiv=document.createElement('div');
		
		oNewDiv.innerHTML=format(
			'<p>{content}</p>'+
			'<a href="javascript:;" class="ref">{ref}</a>'+
			'<a href="javascript:;" class="acc">{acc}</a>'+
			'<span class="time">{time}</span>',
			data[i]
		);
		
		this.div.appendChild(oNewDiv);
	}
};





