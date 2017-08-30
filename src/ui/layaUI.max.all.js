var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var battlefieldUI=(function(_super){
		function battlefieldUI(){
			

			battlefieldUI.__super.call(this);
		}

		CLASS$(battlefieldUI,'ui.battlefieldUI',_super);
		var __proto__=battlefieldUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(battlefieldUI.uiView);
		}
		battlefieldUI.uiView={"type":"View","props":{"width":800,"height":480}};
		return battlefieldUI;
	})(View);
var mainUI=(function(_super){
		function mainUI(){
			
		    this.info=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);
		}
		mainUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/map.jpg"}},{"type":"Image","props":{"y":0,"x":680,"var":"info","skin":"img/right.jpg"}}]};
		return mainUI;
	})(View);
var menu1UI=(function(_super){
		function menu1UI(){
			
		    this.newGame=null;
		    this.exitGame=null;
		    this.aboutWork=null;
		    this.backGame=null;

			menu1UI.__super.call(this);
		}

		CLASS$(menu1UI,'ui.menu1UI',_super);
		var __proto__=menu1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(menu1UI.uiView);
		}
		menu1UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/gmstart.jpg"}},{"type":"Image","props":{"y":227,"x":28,"var":"newGame","skin":"img/gmnew.jpg"}},{"type":"Image","props":{"y":352,"x":416,"var":"exitGame","skin":"img/gmend.jpg"}},{"type":"Image","props":{"y":352,"x":28,"var":"aboutWork","skin":"img/gmwork.jpg"}},{"type":"Image","props":{"y":226,"x":416,"var":"backGame","skin":"img/gmback.jpg"}}]};
		return menu1UI;
	})(View);
var menu2UI=(function(_super){
		function menu2UI(){
			
		    this.dznq=null;
		    this.ccjq=null;
		    this.cbzz=null;
		    this.sgdl=null;
		    this.backBtn=null;

			menu2UI.__super.call(this);
		}

		CLASS$(menu2UI,'ui.menu2UI',_super);
		var __proto__=menu2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(menu2UI.uiView);
		}
		menu2UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":-5,"x":5,"skin":"img/history.jpg"}},{"type":"Image","props":{"y":125,"x":17,"var":"dznq","skin":"img/_1dznq.jpg"}},{"type":"Image","props":{"y":125,"x":414,"var":"ccjq","skin":"img/_2ccjq.jpg"}},{"type":"Image","props":{"y":287,"x":17,"var":"cbzz","skin":"img/_3cbzz.jpg"}},{"type":"Image","props":{"y":287,"x":415,"var":"sgdl","skin":"img/_4sgdl.jpg"}},{"type":"Image","props":{"y":0,"x":700,"var":"backBtn","skin":"img/back.jpg"}}]};
		return menu2UI;
	})(View);
var selectLordUI=(function(_super){
		function selectLordUI(){
			
		    this.backBtn=null;
		    this.lordList=null;

			selectLordUI.__super.call(this);
		}

		CLASS$(selectLordUI,'ui.selectLordUI',_super);
		var __proto__=selectLordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(selectLordUI.uiView);
		}
		selectLordUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/white.jpg"}},{"type":"Image","props":{"y":80,"x":230,"skin":"img/who.jpg"}},{"type":"Image","props":{"y":0,"x":700,"var":"backBtn","skin":"img/back.jpg"}},{"type":"List","props":{"y":40,"x":40,"var":"lordList","repeatY":10,"repeatX":1,"name":"m_label"},"child":[{"type":"Label","props":{"width":107,"text":"赵云","strokeColor":"#ffffff","stroke":5,"renderType":"render","name":"render","height":40,"fontSize":30,"color":"#210732","bold":true}}]},{"type":"VScrollBar","props":{"y":57,"x":130,"name":"scrollBar"}}]};
		return selectLordUI;
	})(View);