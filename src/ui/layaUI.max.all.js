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
		menu1UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/gmstart.jpg"}},{"type":"Image","props":{"y":227,"x":28,"var":"newGame","skin":"img/gmnew.jpg"}},{"type":"Image","props":{"y":352,"x":414,"var":"exitGame","skin":"img/gmend.jpg"}},{"type":"Image","props":{"y":352,"x":28,"var":"aboutWork","skin":"img/gmwork.jpg"}},{"type":"Image","props":{"y":226,"x":415,"var":"backGame","skin":"img/gmback.jpg"}}]};
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
		menu2UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/history.jpg"}},{"type":"Image","props":{"y":142,"x":8,"var":"dznq","skin":"img/_1dznq.jpg"}},{"type":"Image","props":{"y":283,"x":9,"var":"ccjq","skin":"img/_2ccjq.jpg"}},{"type":"Image","props":{"y":139,"x":407,"var":"cbzz","skin":"img/_3cbzz.jpg"}},{"type":"Image","props":{"y":282,"x":409,"var":"sgdl","skin":"img/_4sgdl.jpg"}},{"type":"Button","props":{"y":428,"x":698,"width":100,"var":"backBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"返回","height":50}}]};
		return menu2UI;
	})(View);
var selectLordUI=(function(_super){
		function selectLordUI(){
			
		    this.lordList=null;
		    this.backBtn=null;

			selectLordUI.__super.call(this);
		}

		CLASS$(selectLordUI,'ui.selectLordUI',_super);
		var __proto__=selectLordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(selectLordUI.uiView);
		}
		selectLordUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/white.jpg"}},{"type":"Image","props":{"y":40,"x":40,"width":538,"skin":"img/who.jpg","height":400}},{"type":"List","props":{"y":44,"x":624,"width":131,"var":"lordList","repeatY":8,"repeatX":1,"name":"m_label","height":354},"child":[{"type":"Label","props":{"width":107,"text":"赵云","strokeColor":"#ffffff","stroke":5,"renderType":"render","name":"render","height":40,"fontSize":30,"color":"#210732","bold":true}}]},{"type":"VScrollBar","props":{"y":50,"x":732,"name":"scrollBar"}},{"type":"Button","props":{"y":428,"x":590,"width":100,"stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"确定","height":50}},{"type":"Button","props":{"y":428,"x":698,"width":100,"var":"backBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"返回","height":50}}]};
		return selectLordUI;
	})(View);