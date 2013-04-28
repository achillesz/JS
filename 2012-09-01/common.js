function format(str, json)
{
	return str.replace(/{\w+}/g, function (str){
		str=str.substring(1,str.length-1);
		
		return json[str];
	});
}

function extend(parent, child)
{
	//child.prototype.parentFn={};
	
	for(var i in parent.prototype)
	{
		/*child.prototype.parentFn[i]=*/
		child.prototype[i]=parent.prototype[i];
	}
}