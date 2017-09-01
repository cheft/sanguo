!(function(global) {
  var Event = Laya.Event;
  var Handler = Laya.Handler;

  function SelectLord(period) {
    this.period = period; // 四个时期：dznq, ccjq, cbzz, sgdl
    this.lastSelectedLabel = null; // 最后选择的君主 Label
    this.existSps = []; // 已存在的标记城池点
    this.ui = new selectLordUI();
    this.handleUI();
    this.handleData();
  }

  SelectLord.prototype.start = function() {
    Laya.stage.addChild(this.ui);
  }

  SelectLord.prototype.stop = function() {
    Laya.stage.removeChild(this.ui);
  }

  SelectLord.prototype.handleUI = function() {
    // 给地图加阴影效果
    var glowFilter = new Laya.GlowFilter('#000000', 10, 0, 0);
    this.ui.whoMap.filters = [glowFilter];
    // 给头像加阴影效果
    var headFilter = new Laya.GlowFilter('#000000', 5, 0, 0);  
    this.ui.lordHead.filters = [headFilter];

    // 指定君主列表的的纵向滚动皮肤
    this.ui.lordList.vScrollBarSkin = '';

    // 绑定返回按钮事件
    this.ui.backBtn.on(Event.CLICK, this, this.stop);
    this.ui.okBtn.on(Event.CLICK, this, this.okHandler)
  }

  SelectLord.prototype.handleData = function() {
    this.ui.lordList.array = data[this.period + 'Lord'];
    this.ui.lordList.renderHandler = new Handler(this, this.lordListRender);
    // this.ui.lordList.selectedIndex = 0;
    var headFilter = new Laya.GlowFilter('#000000', 5, 0, 0);  
    this.ui.lordHead.filters = [headFilter];
  }

  SelectLord.prototype.lordListRender = function(cell, index) {
    var label = cell.getChildByName('name');
    label.text = cell._dataSource;
    // 解决滚动时也会选中刚出现的第一项的 bug
    if (label.borderColor === '#131313') {
      label.borderColor = ''
    } else if (index === 0) {
      this.lordLabelClick(0, label);
    }
    label.on(Event.CLICK, this, this.lordLabelClick, [index, label]);
  }

  SelectLord.prototype.lordLabelClick = function(index, label) {
    this.ui.lordList.selectIndex = index;
    // 将上次选中的 label 边框颜色还原，然后设置当前选中
    if (this.lastSelectedLabel) this.lastSelectedLabel.borderColor = '';
    label.borderColor = '#131313';
    this.lastSelectedLabel = label;
    var name = label.text;
    this.fillLordInfo(index, name);
    this.ui.lordHead.graphics.drawTexture(util.getHeadImage(this.period, name), 0, 0, 120, 120);
  }

  SelectLord.prototype.fillLordInfo = function(index, name) {
    // 获取当前君主在这个时期拥有的城池，转化成数组，其中第1个数据为长度信息
    var cities = data[this.period + 'CityToWho'][index].split(' ');
    // 获取当前君主在这个时期拥有的将领，转化成数组，其中第1个数据为长度信息
    var heros = data[this.period + 'HerosToWho'][index].split(' ');
    // 获取当前君主在这个时期的属性信息
    var info = data[this.period + 'HerosInfo'][index].split(' ');
    // 展示当前君主的属性信息
    this.ui.lordInfo.text = '年龄： ' + info[13] + '\n\n' + '武力：' + info[3] + '\n\n' + '智谋：' + info[4] + '\n\n' +
      '将领：' + heros[0] + '名\n\n' + '城池：' + cities.shift() + '座\n\n'
      // '兵种：' + data.bingzhong[info[9]] + '\n\n' + '所驻城池：' + data.cityname[info[14]];
    
    // 展示当前君主的介绍信息
    this.ui.lordDesc.text = data.lordDesc[name];

    // 此 cities 已在前面删除掉了第1个长度数据
    this.flagCityMap(cities)
  }

  SelectLord.prototype.flagCityMap = function(cities) {
    // 删掉上一次标记地图的点
    if (this.existSps.length > 0) {
      for (var i = 0; i < this.existSps.length; i++) {
        this.ui.removeChild(this.existSps[i]);
      }
      this.existSps = [];
    }
    
    // 重新标记当前君主所拥有的城池坐标信息
    for (var i = 0; i < cities.length; i++) {
      var sp = new Laya.Sprite();
      this.ui.addChild(sp);
      this.existSps.push(sp);
      // 获取城池坐标，相对于地图算的
      var pos = data.cityToWhoPosition[(cities[i]-1)].split(' ');
      // 加 10 像素，是因为地图在这个 UI 上的 margin-left 和 margin-top 是 10，20 为宽度和高度
      sp.graphics.drawRect(10 + parseInt(pos[0], 10), 10 + parseInt(pos[1], 10), 20, 20, '#000000');
    }
  }

  SelectLord.prototype.okHandler = function() {
    var main = new Main(this.period, this.ui.lordList.selectIndex);
    main.start();
  }
  
  global.onSelectLord = function() {
    new SelectLord(this).start();
  };
})(window);
