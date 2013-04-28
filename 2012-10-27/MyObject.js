function MyObject()
{
	this.listeners={};
}

//通知队列里所有的东西——调用监听的函数
MyObject.prototype.notify=function (type, queue)
{
	if(this.listeners[type])
	{
		for(var i=0;i<this.listeners[type].length;i++)
		{
			this.listeners[type][i]();
		}
	}
};

//添加监听
MyObject.prototype.addListener=function (type, fn)
{
	if(this.listeners[type])
	{
		this.listeners[type].push(fn);
	}
	else
	{
		this.listeners[type]=[fn];
	}
};