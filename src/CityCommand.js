!(function(global) {
  var Event = Laya.Event;
  var Handler = Laya.Handler;

  function CityCommand(period, lordIndex, cityIndex) {
    this.period = period; // 四个时期：dznq, ccjq, cbzz, sgdl
    this.lordIndex = lordIndex;
    this.cityIndex = cityIndex;
    this.ui = new cityCommandUI();
    
    this.handleUI();
  }

  CityCommand.prototype.start = function() {
    this.ui.show();
  }

  CityCommand.prototype.stop = function() {
    this.ui.close();
  }

  CityCommand.prototype.handleUI = function() {
    // 通过序号获取君主名称
    var name = data[this.period + 'Lord'][this.lordIndex];
    this.ui.cityTitle.label = data.cityname[this.cityIndex] + '(' + name + ')';

    // 序号、归属要减1、状态、农业上限、农业、商业上限、商业、民忠、防灾、人口上限、人口、金钱、粮草、后备兵力..
    var cityInfo = data[this.period + 'CityInfo'][this.cityIndex].split(' ');
    // TODO: 没找到太守暂时
    this.ui.lordHead.graphics.drawTexture(util.getHeadImage(this.period, name), 0, 0, 80, 80);
    // 给头像加阴影效果
    var headFilter = new Laya.GlowFilter('#000000', 5, 0, 0);  
    this.ui.lordHead.filters = [headFilter];
    this.ui.mgrName.text = name;
    this.ui.status.text = cityInfo[2] == 0 ? '正常' : cityInfo[2];  // TODO:
    this.ui.farming.text = cityInfo[4] + ' / ' + cityInfo[3];
    this.ui.business.text = cityInfo[6] + ' / ' + cityInfo[5];
    this.ui.peopleloyalty.text = cityInfo[7];
    this.ui.prevention.text = cityInfo[8];
    this.ui.population.text = cityInfo[10] + ' / ' +cityInfo[9];
    this.ui.money.text = cityInfo[11];
    this.ui.food.text = cityInfo[12];
    this.ui.behindTroops.text = cityInfo[13];
    this.ui.lordHead.on(Event.CLICK, this, this.openHeroList);
  }

  CityCommand.prototype.openHeroList = function() {
    var heroList = new HeroList(this.period, this.lordIndex);
    heroList.start();
  }

  global.CityCommand = CityCommand;
})(window);
