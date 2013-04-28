function BaiduC()
{
	var m=new BaiduM();
	var v=new BaiduV();
	var oTxt=document.getElementById('txt1');
	
	oTxt.onkeyup=function ()
	{
		if(oTxt.value.length>5)
		{
			alert('请交钱');
			return;
		}
		//1.请求
		m.get(this.value, function (arr){
			//请求数据完成
			//2.交给V显示
			v.get(arr);
		});
	};
}