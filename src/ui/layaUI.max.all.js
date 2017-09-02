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
var heroListUI=(function(_super){
		function heroListUI(){
			
		    this.bg=null;
		    this.heros=null;
		    this.forceLabel=null;
		    this.ruseLabel=null;
		    this.typeLabel=null;
		    this.troopsLabel=null;
		    this.experienceLabel=null;
		    this.levelLabel=null;
		    this.basicInfoBtn=null;
		    this.otherInfoBtn=null;
		    this.basicLabel1=null;
		    this.basicLabel2=null;
		    this.basicLabel3=null;
		    this.basicLabel4=null;
		    this.otherLabel1=null;
		    this.otherLabel2=null;
		    this.otherLabel3=null;
		    this.otherLabel4=null;

			heroListUI.__super.call(this);
		}

		CLASS$(heroListUI,'ui.heroListUI',_super);
		var __proto__=heroListUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(heroListUI.uiView);
		}
		heroListUI.uiView={"type":"Dialog","props":{"width":640,"top":20,"left":25,"height":440},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"img/modal_bg.jpg"}},{"type":"Button","props":{"y":-16,"x":610,"stateNum":1,"skin":"img/close_btn_bg.png","name":"close"}},{"type":"List","props":{"y":71,"x":50,"width":550,"var":"heros","repeatY":8,"repeatX":1,"height":330},"child":[{"type":"Box","props":{"y":0,"x":0,"width":110,"renderType":"render","name":"render","height":44},"child":[{"type":"Image","props":{"y":10,"x":2,"width":40,"name":"head","height":40}},{"type":"Label","props":{"y":16,"x":54,"width":60,"text":"\b\b赵云","name":"name","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":135,"width":36,"text":"98","name":"force","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":208,"width":36,"text":"78","name":"ruse","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":280,"width":40,"text":"弓兵","name":"type","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":327,"width":120,"text":"5000/9999","name":"troops","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":456,"width":36,"text":"100","name":"experience","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":14,"x":513,"width":30,"text":"99","name":"level","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":135,"width":36,"visible":false,"text":"98","name":"belong","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":208,"width":36,"visible":false,"text":"100","name":"loyalty","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":280,"visible":false,"text":"弓兵","name":"strength","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":337,"width":120,"visible":false,"name":"quipment1","height":40,"fontSize":20,"align":"center"}},{"type":"Label","props":{"y":16,"x":456,"width":36,"visible":false,"text":"100","name":"quipment2","height":40,"fontSize":20,"align":"center"}}]},{"type":"VScrollBar","props":{"y":4,"x":530,"width":1,"pivotY":8,"pivotX":-30,"name":"scrollBar","height":330}}]},{"type":"Label","props":{"y":40,"x":50,"width":44,"text":"头像","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":114,"width":44,"text":"\b姓名","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":184,"width":44,"var":"forceLabel","text":"武力","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":258,"width":44,"var":"ruseLabel","text":"\b智谋","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":331,"width":44,"var":"typeLabel","text":"兵种","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":410,"width":44,"var":"troopsLabel","text":"兵力","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Label","props":{"y":40,"x":496,"width":44,"var":"experienceLabel","text":"经验","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"color":"#000000","bold":true}},{"type":"Label","props":{"y":40,"x":552,"width":44,"var":"levelLabel","text":"等级","strokeColor":"#ffffff","stroke":1,"height":22,"fontSize":22,"bold":true}},{"type":"Button","props":{"y":416,"x":460,"width":80,"stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"labelBold":true,"label":"确定","height":40}},{"type":"Button","props":{"y":416,"x":546,"width":80,"stateNum":1,"skin":"img/btn_bg.jpg","name":"cancel","labelSize":20,"labelBold":true,"label":"取消","height":40}},{"type":"Button","props":{"y":-15,"x":260,"width":120,"stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"武将列表","height":40}},{"type":"Button","props":{"y":21,"x":-17,"width":40,"var":"basicInfoBtn","stateNum":1,"skin":"img/btn_v_bg.jpg","height":100}},{"type":"Button","props":{"y":127,"x":-17,"width":40,"var":"otherInfoBtn","stateNum":1,"skin":"img/btn_v_bg.jpg","height":100}},{"type":"Label","props":{"y":31,"x":-6,"var":"basicLabel1","text":"基","fontSize":18,"color":"#AE1916"}},{"type":"Label","props":{"y":49,"x":-6,"var":"basicLabel2","text":"本","fontSize":18,"color":"#AE1916"}},{"type":"Label","props":{"y":69,"x":-6,"var":"basicLabel3","text":"信","fontSize":18,"color":"#AE1916"}},{"type":"Label","props":{"y":88,"x":-6,"width":20,"var":"basicLabel4","text":"息","height":20,"fontSize":18,"color":"#AE1916"}},{"type":"Label","props":{"y":137,"x":-6,"var":"otherLabel1","text":"其","fontSize":18,"color":"#32556B"}},{"type":"Label","props":{"y":155,"x":-6,"width":18,"var":"otherLabel2","text":"他","height":22,"fontSize":18,"color":"#32556B"}},{"type":"Label","props":{"y":175,"x":-6,"var":"otherLabel3","text":"信","fontSize":18,"color":"#32556B"}},{"type":"Label","props":{"y":194,"x":-6,"width":20,"var":"otherLabel4","text":"息","height":20,"fontSize":18,"color":"#32556B"}}]};
		return heroListUI;
	})(Dialog);
var mainUI=(function(_super){
		function mainUI(){
			
		    this.info=null;
		    this.lordHead=null;
		    this.lordName=null;
		    this.cityLength=null;
		    this.heroLength=null;
		    this.menuBtn=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);
		}
		mainUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/map.jpg"}},{"type":"Image","props":{"y":0,"x":690,"width":110,"var":"info","skin":"img/right.jpg","height":480}},{"type":"Image","props":{"y":60,"x":704,"width":80,"var":"lordHead","height":80}},{"type":"Label","props":{"y":24,"x":705,"width":79,"var":"lordName","height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":146,"x":751,"width":33,"var":"cityLength","text":"1","height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":196,"x":747,"width":44,"var":"heroLength","text":"1","height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":264,"x":704,"width":44,"text":"203","height":30,"fontSize":28,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":310,"x":715,"width":35,"text":"12","height":30,"fontSize":28,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Button","props":{"y":413,"x":699,"width":92,"var":"menuBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":24,"label":"菜单","height":46}}]};
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
			
		    this.whoMap=null;
		    this.lordList=null;
		    this.okBtn=null;
		    this.backBtn=null;
		    this.lordHead=null;
		    this.lordDesc=null;
		    this.lordInfo=null;

			selectLordUI.__super.call(this);
		}

		CLASS$(selectLordUI,'ui.selectLordUI',_super);
		var __proto__=selectLordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(selectLordUI.uiView);
		}
		selectLordUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/white.jpg"}},{"type":"Image","props":{"y":10,"x":10,"width":420,"var":"whoMap","skin":"img/who.jpg","height":320}},{"type":"List","props":{"y":15,"x":598,"width":164,"var":"lordList","spaceY":10,"repeatY":7,"repeatX":1,"height":369},"child":[{"type":"Box","props":{"y":0,"x":10,"width":145,"renderType":"render","name":"render","height":40},"child":[{"type":"Label","props":{"y":4,"x":31,"width":86,"strokeColor":"#ffffff","stroke":2,"padding":"4","name":"name","height":34,"fontSize":26,"color":"#080808","bold":true}}]},{"type":"VScrollBar","props":{"y":1,"x":130,"width":1,"name":"scrollBar","height":374}}]},{"type":"Button","props":{"y":421,"x":584,"width":100,"var":"okBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"确定","height":50}},{"type":"Button","props":{"y":420,"x":692,"width":100,"var":"backBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"返回","height":50}},{"type":"Image","props":{"y":14,"x":465,"width":120,"var":"lordHead","height":120}},{"type":"Label","props":{"y":359,"x":17,"wordWrap":true,"width":552,"var":"lordDesc","strokeColor":"#ffffff","stroke":2,"leading":8,"height":104,"fontSize":20,"bold":true}},{"type":"Label","props":{"y":146,"x":464,"width":121,"var":"lordInfo","strokeColor":"#ffffff","stroke":1,"height":192,"fontSize":20,"bold":true}}]};
		return selectLordUI;
	})(View);