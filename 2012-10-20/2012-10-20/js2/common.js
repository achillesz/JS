function time2date(t)
{
	function toDouc(n)
	{
		return n<10?'0'+n:''+n;
	}
	
	var oDate=new Date();
	
	oDate.setTime(t*1000);
	
	return oDate.getFullYear()+'-'+toDouc(oDate.getMonth()+1)+'-'+toDouc(oDate.getDate())+' '+toDouc(oDate.getHours())+':'+toDouc(oDate.getMinutes());
}
