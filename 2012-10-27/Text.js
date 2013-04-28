function Text(user)
{
	var _this=this;
	
	MyObject.call(this);
	
	user.addListener('reg', function (){
		_this.get();
	});
}

(function (){
	for(var i in MyObject.prototype)
	{
		Text.prototype[i]=MyObject.prototype[i];
	}
})();

Text.prototype.get=function ()
{
	var oTxt=document.getElementById('txt1');
	
	var obj=createObj();
	
	oTxt.value=obj.get();
};