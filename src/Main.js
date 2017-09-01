!(function(global) {
  var Event = Laya.Event;
  var Handler = Laya.Handler;

  function Main(period, lordIndex) {
    this.period = period; // 四个时期：dznq, ccjq, cbzz, sgdl
    this.lordIndex = lordIndex;
    this.ui = new mainUI();
    
    this.handleUI();
  }

  Main.prototype.start = function() {
    Laya.stage.addChild(this.ui);
  }

  Main.prototype.stop = function() {
    Laya.stage.removeChild(this.ui);
  }

  Main.prototype.handleUI = function() {
    // 通过序号获取君主名称
    var name = data[this.period + 'Lord'][this.lordIndex];
    this.ui.lordName.text = name;
    this.ui.lordHead.graphics.drawTexture(util.getHeadImage(this.period, name), 0, 0, 80, 80);
     // 给头像加阴影效果
    var headFilter = new Laya.GlowFilter('#000000', 5, 0, 0);  
    this.ui.lordHead.filters = [headFilter];

    // 获取当前君主在这个时期拥有的城池，转化成数组，其中第1个数据为长度信息
    var cities = data[this.period + 'CityToWho'][this.lordIndex].split(' ');
    this.ui.cityLength.text = cities[0];

    // 获取当前君主在这个时期拥有的将领，转化成数组，其中第1个数据为长度信息
    var heros = data[this.period + 'HerosToWho'][this.lordIndex].split(' ');
    this.ui.heroLength.text = heros[0];

    this.ui.menuBtn.on(Event.CLICK, this, this.stop);
    this.ui.lordHead.on(Event.CLICK, this, this.openHeroList);
  }

  Main.prototype.openHeroList = function() {
    var heroList = new HeroList(this.period, this.lordIndex);
    heroList.start();
  }

  global.Main = Main;
})(window);
