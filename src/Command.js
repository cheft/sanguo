var command = {
  // 搜寻，可得到武将、道具、金钱、粮食
  souxun: function(period, cityId, heroId) {
    var num = Math.floor(Math.random()*5);
    var cityInfo = data[period + 'CityInfo'][cityId].split(' ');
    var heroInfo = data[period + 'HerosInfo'][heroId].split(' ');
    // TODO: 武将设置正忙状态未处理
    switch(num) {
      case 0:
        // 城池商业值 / 100 + 武将智力 / 2 + random() * 30
        var money = Math.floor(parseInt(cityInfo[6]) / 100  + parseInt(heroInfo[4]) / 2 + Math.random() * 30);
        var cityMoney = parseInt(cityInfo[11]) + money;
        resUtil.setACityInfo(period, cityId, 11, cityMoney);
        console.log('城中找到金钱 ' + money);
        break;
      case 1:
        // 城池农业值 / 100 + 武将智力 / 2 + random() *  30
        var food = Math.floor(parseInt(cityInfo[5]) / 100  + parseInt(heroInfo[4]) / 2 + Math.random() * 30);
        var cityFood = parseInt(cityInfo[13]) + food;
        resUtil.setACityInfo(period, cityId, 13, cityFood);
        console.log('城中找到粮食 ' + food);
        break;
      case 2:
        var heros = resUtil.getCityHerosOnSide(period, cityId);
        if (heros.length > 0) {
          for (var i = 0; i < heros.length; i++) {
            var hInfo = heros[i].split(' ');
            // 如果伯乐是当前搜索人，直接找到退出
            if (hInfo[15] == heroId) {
              // 设置这个人的归属为这座城池的归属人
              resUtil.setAHeroInfo(period, cityId, 1, cityInfo[1]);
              var name = data[period + 'HerosName'][hInfo[0]];
              console.log('城中找到武将 ' + name);
              return;
            }
          }
          // 生成随机数，加入随机没有找到的可能(+1)
          var rNum = Math.floor(Math.random() * (heros.length + 1))
          if (rNum > heros.length) {
            console.log('听说城中有位贤者，可惜臣未能访到。');
          } else {
            // 设置这个人的归属为这座城市的归属人
            resUtil.setAHeroInfo(period, cityId, 1, cityInfo[1]);
            var name = data[period + 'HerosName'][heros[rNum].split(' ')[0]];
            console.log('城中找到武将 ' + name);
          }
        } else {
          console.log('什么也没找到……');
        }
        break;
      case 3:
        // 寻道具逻辑跟上面差不多
        var goods = resUtil.getGoodsOnSide(period, cityId);
        if (goods.length > 0) {
          for (var i = 0; i < goods.length; i++) {
            var gInfo = goods[i].split(' ');
            // 如果伯乐是当前搜索人，直接找到退出
            if (gInfo[7] == (heroId+1)) {
              // 设置这个道具的所在城池为这座城池
              resUtil.setAGoodInfo(period, goodId, 6, cityId);
              var name = data['GoodsName'][parseInt(gInfo[0]) - 1];
              console.log('城中找到道具 ' + name);
              return;
            }
          }
          // 生成随机数，加入随机没有找到的可能(+1)
          var rNum = Math.floor(Math.random() * (goods.length + 1))
          if (rNum > goods.length) {
            console.log('听说城中有件宝物，可惜臣未能寻到。');
          } else {
            // 设置这个道具的所在城池为这座城池
            resUtil.setAGoodInfo(period, goodId, 6, cityId);
            var name = data['GoodsName'][parseInt(goods[rNum].split(' ')[0]) - 1];
            console.log('城中找到道具 ' + name);
          }
        } else {
          console.log('什么也没找到……');
        }
        break;
      default:
        console.log('什么也没找到……');
    }
  },

  // 开垦，发展农业
  kaiken: function() {

  },

  // 招商，发展商业
  zhaoshang: function() {

  },

  // 治理，增强防灾
  zhili: function() {

  },

  // 出巡，增强城市民忠
  chuxun: function() {

  },
  
  // 交易，买卖粮食
  jiaoyi: function() {

  },

  // 输送，输送金钱粮食
  shusong: function() {

  },

  // 招降，俘虏
  zhaoxiang: function() {

  },

  // 处斩，俘虏
  chuzhan: function() {

  },

  // 流放，俘虏或在任武将
  liufang: function() {

  },

  // 赏赐，赏赐武将道具
  shangci: function() {

  },

  // 没收，没收武将道具
  moshou: function() {

  },

  // 移动，将武将从一个城市移动到另一个已方城市
  yidong: function() {

  },

  // 侦察，侦察地方城市情况
  zhencha: function() {

  },

  // 征兵，增加兵力
  zhengbing: function() {

  },

  // 分配，为武将分配兵力
  fenpei: function() {

  },

  // 掠夺，掠夺城池内资源
  lueduo: function() {

  },

  // 出征，攻打敌方城池
  chuzheng: function() {

  },

  // 离间，离间敌方太守，TODO:
  lijian: function() {

  },

  // 招揽，招揽敌方武将
  zhaolan: function() {

  },

  // 策反，策反敌方太守，TODO:
  cefan: function() {

  },

  // 反间，TODO:
  fanjian: function() {

  },

  // 劝降，劝降太守
  quanxiang: function() {

  }
}
