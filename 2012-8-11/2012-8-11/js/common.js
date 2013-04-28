function json2url(json)
{
	var arr=[];
	for(var i in json)
	{
		arr.push(i+'='+json[i]);
	}
	
	arr.push('t='+new Date().getTime());
	
	//arr->['act=add', 'user=blue', ...]
	
	return arr.join('&');
}