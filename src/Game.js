var Event = Laya.Event;
var Handler = Laya.Handler;

Laya.init(800, 480, Laya.WebGL);
Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
// Laya.stage.fullScreenEnabled = true;
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;

// Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
// Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
// Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

loadImages();
showCG();

function loadImages(tl) {
  Laya.loader.load(['cg/cg_01.jpg', 'cg/cg_02.jpg', 'cg/cg_03.jpg', 'cg/cg_04.jpg', 'cg/cg_05.jpg']);
  Laya.loader.load(['img/gmstart.jpg']);
  Laya.loader.load(['img/history.jpg', 'img/btn_bg.jpg']);
  Laya.loader.load(['img/white.jpg', 'img/who.jpg', 'img/head_dznq.jpg', 'img/head_ccjq.jpg', 'img/head_cbzz.jpg', 'img/head_sgdl.jpg']);
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

  menu2.dznq.on(Event.CLICK, this, onSelectLord.bind('dznq'));
  menu2.ccjq.on(Event.CLICK, this, onSelectLord.bind('ccjq'));
  menu2.cbzz.on(Event.CLICK, this, onSelectLord.bind('cbzz'));
  menu2.sgdl.on(Event.CLICK, this, onSelectLord.bind('sgdl'));
}

function onBack() {
  Laya.stage.removeChild(this);
}

function showBattlefiled() {
  var battlefield = new Battlefiled();
  battlefield.load();
}
