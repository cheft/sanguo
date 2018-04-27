!(function(global) {
  var Event = Laya.Event;
  var Handler = Laya.Handler;

  function HeroList(period, lordIndex, cityIndex, heros, parent) {
    this.period = period; // 四个时期：dznq, ccjq, cbzz, sgdl
    this.lordIndex = lordIndex;
    this.cityIndex = cityIndex;
    this.heros = heros;
    this.parent = parent;

    this.showMode = 'basic';
    this.ui = new heroListUI();
    this.handleUI();
    this.handleData();
  }

  HeroList.prototype.start = function() {
    this.ui.show()
  }

  HeroList.prototype.stop = function() {
    this.ui.close()
  }

  HeroList.prototype.handleUI = function() {
    // 给地图加阴影效果，有点性能问题，有时会卡一下
    var glowFilter = new Laya.GlowFilter('#000000', 10, 0, 0);
    this.ui.bg.filters = [glowFilter];

    this.ui.basicInfoBtn.on(Event.CLICK, this, this.viewBasicInfo);
    this.ui.otherInfoBtn.on(Event.CLICK, this, this.viewOtherInfo);
    this.ui.heros.selectHandler = new Handler(this, this.handleHeroSelect);
  }

  HeroList.prototype.handleData = function() {
    this.ui.heros.array = this.heros;
    this.ui.heros.renderHandler = new Handler(this, this.herosRender);
  }

  HeroList.prototype.herosRender = function(cell, index) {
    // 获取当前武将的信息
    var heroInfo = cell._dataSource.split(' ');
    var name = data[this.period + 'HerosName'][heroInfo[0]];
    var texture = util.getHeadImage(this.period, name);
    cell.getChildByName('head').graphics.drawTexture(texture, 0, 0, 40, 40); // 头像
    cell.getChildByName('name').text = name; // 名称

    // basicInfo
    cell.getChildByName('force').text = heroInfo[3]; // 物理
    cell.getChildByName('ruse').text = heroInfo[4];  // 智谋
    cell.getChildByName('type').text = data.bingzhong[heroInfo[9]]; // 兵种
    cell.getChildByName('troops').text = heroInfo[10] + '/9000'; // 兵力/最大兵力
    cell.getChildByName('experience').text = heroInfo[7]; // 经验
    cell.getChildByName('level').text = heroInfo[2];  // 等级

    // otherInfo
    cell.getChildByName('belong').text = data[this.period + 'HerosName'][parseInt(heroInfo[1]) - 1] || '无'; // 归属
    cell.getChildByName('loyalty').text = heroInfo[5];  // 忠诚度
    cell.getChildByName('strength').text = heroInfo[8] + '/100'; // 体力
    cell.getChildByName('quipment1').text = data.goodsName[heroInfo[11] - 1] || '无';   // 道具一
    cell.getChildByName('quipment2').text = data.goodsName[heroInfo[12] - 1] || '无';   // 道具二
    
    var isBasicShow = (this.showMode === 'basic');
    cell.getChildByName('force').visible = isBasicShow;
    cell.getChildByName('ruse').visible = isBasicShow;
    cell.getChildByName('type').visible = isBasicShow;
    cell.getChildByName('troops').visible = isBasicShow;
    cell.getChildByName('experience').visible = isBasicShow;
    cell.getChildByName('level').visible = isBasicShow;

    cell.getChildByName('belong').visible = !isBasicShow;
    cell.getChildByName('loyalty').visible = !isBasicShow;
    cell.getChildByName('strength').visible = !isBasicShow;
    cell.getChildByName('quipment1').visible = !isBasicShow;
    cell.getChildByName('quipment2').visible =!isBasicShow;
  }

  HeroList.prototype.viewBasicInfo = function() {
    this.ui.forceLabel.text = '武力';
    this.ui.ruseLabel.text = '智谋';
    this.ui.typeLabel.text = '兵种';
    this.ui.troopsLabel.text = '兵力';
    this.ui.experienceLabel.text = '经验';
    this.ui.levelLabel.text = '等级';

    this.ui.basicLabel1.color = '#AE1916';
    this.ui.basicLabel2.color = '#AE1916';
    this.ui.basicLabel3.color = '#AE1916';
    this.ui.basicLabel4.color = '#AE1916';
    this.ui.otherLabel1.color = '#32556B';
    this.ui.otherLabel2.color = '#32556B';
    this.ui.otherLabel3.color = '#32556B';
    this.ui.otherLabel4.color = '#32556B';
    
    this.showMode = 'basic';
    this.ui.heros.refresh();
  }

  HeroList.prototype.viewOtherInfo = function() {
    this.ui.forceLabel.text = '归属';
    this.ui.ruseLabel.text = '忠诚度';
    this.ui.typeLabel.text = '体力';
    this.ui.troopsLabel.text = '道具一';
    this.ui.experienceLabel.text = '道具二';
    this.ui.levelLabel.text = '';

    this.ui.basicLabel1.color = '#32556B';
    this.ui.basicLabel2.color = '#32556B';
    this.ui.basicLabel3.color = '#32556B';
    this.ui.basicLabel4.color = '#32556B';
    this.ui.otherLabel1.color = '#AE1916';
    this.ui.otherLabel2.color = '#AE1916';
    this.ui.otherLabel3.color = '#AE1916';
    this.ui.otherLabel4.color = '#AE1916';

    this.showMode = 'other';
    this.ui.heros.refresh();
  }

  HeroList.prototype.handleHeroSelect = function(index) {
    var hero = this.ui.heros.getItem(index);
    command.souxun(this.period, this.cityIndex, hero[0]);
    this.parent.handleUI();
  }

  global.HeroList = HeroList;
})(window);
