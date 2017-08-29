var Event = Laya.Event;
var Handler = Laya.Handler;

Laya.init(800, 480, Laya.WebGL);
loadImages();
showCG();

function loadImages(tl) {
  Laya.loader.load(['cg/cg_01.jpg', 'cg/cg_02.jpg', 'cg/cg_03.jpg', 'cg/cg_04.jpg', 'cg/cg_05.jpg']);
  Laya.loader.load(['img/gmstart.jpg']);
  Laya.loader.load(['img/history.jpg', 'img/back.jpg']);
  Laya.loader.load(['img/white.jpg', 'img/who.jpg']);
  Laya.loader.load(['img/map.jpg', 'img/right.jpg']);
}

function showCG() {
  var tl = new Laya.Animation();
  tl.loadAnimation('cg.ani');
  Laya.stage.addChild(tl);
  tl.play(0, false);
  tl.on(Event.COMPLETE, null, onShowMenu1);
}


function onShowMenu1() {
  var menu1 = new menu1UI();
  Laya.stage.addChild(menu1);
  menu1.newGame.on(Event.CLICK, this, onShowMenu2);
}

function onShowMenu2() {
  var menu2 = new menu2UI();
  Laya.stage.addChild(menu2);

  menu2.backBtn.on(Event.CLICK, menu2, onBack);
  menu2.dznq.on(Event.CLICK, this, onShowSelectLord);
  menu2.ccjq.on(Event.CLICK, this, onShowSelectLord);
  menu2.cbzz.on(Event.CLICK, this, onShowSelectLord);
  menu2.sgdl.on(Event.CLICK, this, onShowSelectLord);
}

function onBack() {
  Laya.stage.removeChild(this);
}

function onShowSelectLord() {
  var selectLord = new selectLordUI();
  Laya.stage.addChild(selectLord);
  selectLord.backBtn.on(Event.CLICK, selectLord, onBack);

  selectLord.lordList.vScrollBarSkin='';

  var arr =  ['马腾', '刘备', '赵云', '曹操', '曹操', '曹操', '曹操', '曹操', '曹操', '曹操'];
  var tmp = [];
  for (var i = 0; i < arr.length; i++) {
    tmp.push({m_label: {text: arr[i]}});
  }
  selectLord.lordList.array = tmp;

  selectLord.lordList.on(Event.CLICK, this, onShowMain);
}

function onShowMain() {
  var main = new mainUI();
  Laya.stage.addChild(main);
}
