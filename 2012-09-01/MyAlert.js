function MyAlert(title, content)
{
	this.title=title;
	this.content=content;
	
	this._create();
}

MyAlert.prototype={
	_create: function ()	//生成元素、加事件
	{
		var oDiv=document.createElement('div');
		
		oDiv.innerHTML=format('<h2>{title}</h2><p>{content}</p><div></div>', {title: this.title, content: this.content});
		oDiv.className='myAlert';
		
		document.body.appendChild(oDiv);
		
		//背景
		var oBack=document.createElement('div');
		
		oBack.className='myAlert_back';
		
		document.body.appendChild(oBack);
		
		this.div=oDiv;
		this.back=oBack;
		
		//定位
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
		
		oBack.style.top=scrollTop+'px';
	},
	show: function ()
	{
		this.div.style.display='block';
		this.back.style.display='block';
	},
	close: function ()
	{
		this.div.style.display='none';
		this.back.style.display='none';
	}
};

