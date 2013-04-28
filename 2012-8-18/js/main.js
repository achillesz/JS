window.onload=function ()
{
	var c=new WeiboC();
	var oTxt=document.getElementById('txt1');
	var oBtn=document.getElementById('btn1');
	
	c.getPage();	//获取页码
	c.get(1);		//获取第一页数据
	
	oBtn.onclick=function ()
	{
		c.add(oTxt.value, function (){
			oTxt.value='';
		});
	};
};