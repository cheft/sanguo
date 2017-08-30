var TiledMap = Laya.TiledMap;
var Handler = Laya.Handler;
var Rectangle = Laya.Rectangle;

var mLastMouseX = 0;
var mLastMouseY = 0;
var mX = 0;
var mY = 0;
var tiledMap;

function Battlefiled(options) {
  this.options = options;
  tiledMap = new TiledMap();
}

Battlefiled.prototype.load = function() {
  mX = mY = 0;
  tiledMap.createMap("tiledmap/json/map_06.json", new Rectangle(0, 0, 800, 480), new Handler(this, this.completeHandler));
  Laya.stage.on(Event.MOUSE_DOWN, this, mouseDown);
	Laya.stage.on(Event.MOUSE_UP, this, mouseUp);
}

Battlefiled.prototype.completeHandler = function () {
  console.log(2222);
}

//鼠标按下拖动地图
function mouseDown() {
  mLastMouseX = Laya.stage.mouseX;
  mLastMouseY = Laya.stage.mouseY;
  Laya.stage.on(Event.MOUSE_MOVE, this, mouseMove);
}

//移动地图视口
function mouseMove() {
  var diffX = mX - (Laya.stage.mouseX - mLastMouseX);
  var diffY = mY - (Laya.stage.mouseY - mLastMouseY);
  // 地图最大尺寸 2560, 画布尺寸是 800 * 480
  var maxX = 2560 - 800;
  var maxY = 2560 - 480;
  if (diffX < 0) diffX = 0;
  if (diffX > maxX) diffX = maxX;
  if (diffY < 0) diffY = 0;
  if (diffY > maxY) diffY = maxY;
  tiledMap.moveViewPort(diffX, diffY);
}

function mouseUp() {
  mX = mX - (Laya.stage.mouseX - mLastMouseX);
  mY = mY - (Laya.stage.mouseY - mLastMouseY);
  Laya.stage.off(Event.MOUSE_MOVE, this, mouseMove);
}
