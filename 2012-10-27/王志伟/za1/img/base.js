var j = {
	
	getByClass:function(oParent,sClass){
		var aEle = oParent.getElementsByTagName('*');
		var aResult = [];
		var re = new RegExp('\\b'+sClass+'\\b','i');
		var i = 0;
		for(i=0;i<aEle.length;i++)
		{
			if(re.test(aEle[i].className))
			{
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	},
	getStyle:function(obj,attr)
	{
		var result = "";
		if(obj.currentStyle)
		{
			result = obj.currentStyle[attr];
		}
		else
		{
			result = getComputedStyle(obj,false)[attr];
		}
		if(attr =='opacity')
		{
			return Math.round(parseFloat(result)*100);
		}
		else
		{
			return parseInt(result);
		}
	},
	getClassName:function(obj){
		return obj.className;
	},
	removeClass:function(obj,className){
		var cn=jason.common.getClassName(obj);
		var regExp=new RegExp(className,"gi");
		if(regExp.test(cn)){
			obj.className=cn.replace(regExp,'').replace(/(^\s+)|(\s+$)/g,'');
		}
	},
	addClass:function(obj,className){
		var cn=jason.common.getClassName(obj);
		var regExp=new RegExp(className);
		if(!regExp.test(cn)){
			obj.className+=" "+className;
		}
	}
	
}