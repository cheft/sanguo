!(function(global) {
  var Event = Laya.Event;
  var Handler = Laya.Handler;

  function Main(period, lordIndex) {
    this.period = period; // 四个时期：dznq, ccjq, cbzz, sgdl
    this.lordIndex = lordIndex;
    this.cities = [];
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

    this.flagCityMap();
  }
  
  // 'img/city_hiscity.jpg', 'img/city_emcity.jpg', 'img/city_mycity.jpg'
  Main.prototype.flagCityMap = function(cities) {
    // if (this.cities.length > 0) {
    //   for (var i = 0; i < this.cities.length; i++) {
    //     this.ui.removeChild(this.cities[i]);
    //   }
    //   this.cities = [];
    // }

    var positions = data.cityPosition;
    // 获取这个时期每个城池是属于哪个君主的
    var owns = data[this.period + 'CitySetOwn'];
    for (var i = 0; i < positions.length; i++) {
      var imgUrl = 'img/city_hiscity.jpg';
      if (owns[i] === 99) {
        imgUrl = 'img/city_emcity.jpg';
      } else if (owns[i] === this.lordIndex) {
        imgUrl = 'img/city_mycity.jpg'; 
      }
      
      var p = positions[i].split(' ');
      var sp = new Laya.Sprite();
      sp.loadImage(imgUrl);
      sp.pos(p[0], p[1]);
      this.cities.push(sp);
      this.ui.addChild(sp);

      sp.on(Event.CLICK, this, this.cityHandle.bind(this, i));
    }
  }

  Main.prototype.cityHandle = function(i) {
    // 通过城池 id 找到归属君主的 id
    var lordIndex = data[this.period + 'CitySetOwn'][i];
    if (this.lordIndex === lordIndex) {
      console.log('我自己的城池');
      var cityCmd = new CityCommand(this.period, lordIndex, i);
      cityCmd.start();
    } else if (lordIndex === 99) {
      console.log('无人占领城池');
    } else {
      var lordName = data[this.period + 'Lord'][lordIndex];
      console.log(lordName + '的城池');
      var cityCmd = new CityCommand(this.period, lordIndex, i);
      cityCmd.start();
    }
  }

  Main.prototype.openHeroList = function() {
    var heroList = new HeroList(this.period, this.lordIndex);
    heroList.start();
  }

  global.Main = Main;
})(window);
