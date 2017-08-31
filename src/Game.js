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
  menu2.dznq.on(Event.CLICK, this, onShowSelectLord.bind(this, 'dznq'));
  menu2.ccjq.on(Event.CLICK, this, onShowSelectLord.bind(this, 'ccjq'));
  menu2.cbzz.on(Event.CLICK, this, onShowSelectLord.bind(this, 'cbzz'));
  menu2.sgdl.on(Event.CLICK, this, onShowSelectLord.bind(this, 'sgdl'));
}

function onBack() {
  Laya.stage.removeChild(this);
}

function onShowSelectLord(period) {
  var selectLord = new selectLordUI();
  data.curPeriod = period;

  // 给选择界面的地图加阴影
  var glowFilter = new Laya.GlowFilter('#000000', 10, 0, 0);
  selectLord.whoMap.filters = [glowFilter];
  Laya.stage.addChild(selectLord);
  
  selectLord.backBtn.on(Event.CLICK, selectLord, onBack);

  selectLord.lordList.vScrollBarSkin='';

  var arr =  data[period + 'Lord'];
  var tmp = [];
  for (var i = 0; i < arr.length; i++) {
    tmp.push({name: arr[i]});
  }
  selectLord.lordList.array = tmp;
  selectLord.lordList.renderHandler = new Handler(this, onListRender.bind(selectLord));

  var headFilter = new Laya.GlowFilter('#000000', 5, 0, 0);  
  selectLord.lordHead.filters = [headFilter];

  
}

var lastSelectedLabel = null;
function onListRender(cell, index) {
  var label = cell.getChildByName('name');
  if (index === 0) {
    onLabelClick.call(this, 0, label);
    lastSelectedLabel = label;
  }
  label.on(Event.CLICK, this, onLabelClick, [index, label]);
}

function onLabelClick(index, label) {
  var name = label.text;
  if (lastSelectedLabel) {
    lastSelectedLabel.borderColor = '';
  }
  label.border = 3;
  label.borderColor = '#131313';
  lastSelectedLabel = label;
  var citys = data[data.curPeriod + 'CityToWho'][index].split(' ');
  var info = data[data.curPeriod + 'HerosInfo'][index].split(' ');
  this.lordInfo.text = '年龄： ' + info[13] + '\n\n' + '武力：' + info[3] + '\n\n' + '智谋：' + info[4] + '\n\n' +
  '将领：' + data[data.curPeriod + 'HerosToWho'][index].split(' ')[0] + '名\n\n' + '城池：' + citys.shift() + '座\n\n'
  // '兵种：' + data.bingzhong[info[9]] + '\n\n' + '所驻城池：' + data.cityname[info[14]];
  this.lordDesc.text = data.lordDesc[name];
  flagCitysPosition(citys, this);

  var picIndex = data[data.curPeriod + 'HerosName'].indexOf(name);
  var row = Math.floor(picIndex/10); // 1 行 10 个头像，移动到第几行
  var col = picIndex % 10; // 移动到第几列
  var texture = Laya.loader.getRes('img/head_' + data.curPeriod + '.jpg');
  var texEnd = Laya.Texture.create(texture,  col * 120, row * 120, 120, 120);
  this.lordHead.graphics.drawTexture(texEnd, 0, 0, 120, 120);
}


var existSps = []; // 存储已画好的标记
function flagCitysPosition(citys, selectLord) {
  if (existSps.length) {
    for (var i = 0; i < existSps.length; i++) {
      selectLord.removeChild(existSps[i]);
    }
    existSps = [];
  }
  for (var i = 0; i < citys.length; i++) {
    var sp = new Laya.Sprite();
    selectLord.addChild(sp);
    existSps.push(sp);
    // 获取城池坐标，相对于地图算的
    var pos = data.cityToWhoPosition[(citys[i]-1)].split(' ');
    // 加 10 像素，是因为地图在这个 UI 上的 margin-left 和 margin-top 是 10
    sp.graphics.drawRect(10 + parseInt(pos[0], 10), 10 + parseInt(pos[1], 10), 20, 20, '#000000');
  }
}

function onShowMain() {
  var main = new mainUI();
  Laya.stage.addChild(main);

  main.info.on(Event.CLICK, this, showBattlefiled);
}

function showBattlefiled() {
  var battlefield = new Battlefiled();
  battlefield.load();
}
