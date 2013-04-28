function AutoAlert(msg, iSec)
{
	Alert.call(this, msg);
	
	if(!iSec)iSec=5;
	
	this.sec=iSec;
}

extend(Alert, AutoAlert);

AutoAlert.prototype._create=function ()
{
	Alert.prototype._create.call(this);
};

AutoAlert.prototype.show=function ()
{
	var _this=this;
	Alert.prototype.show.call(this);
	
	var iRemain=this.sec;
	function tick(){
		iRemain--;
		
		_this.div.getElementsByTagName('input')[0].value='确定('+iRemain+')';
		
		if(iRemain==0)
		{
			_this.close();
		}
	}
	var timer=setInterval(tick, 1000);
	tick();
};






