var resUtil = {

  // 所有城池为其设置太守
  initCitySatrap: function(period) {
    for (var i = 0; i < data.cityname.length; i++) {
      resUtil.setCitySatrap(period, i);
    }
  },

  // 设置某个城池的太守
  // 如果归属者在城中，则设置为归属者，否则设置为智力最高者
  // 值取 hero 的序号加 1，如果是无人占领城池太守为 0
  setCitySatrap: function(period, cityId) {
    var heros = resUtil.getCityHeros(period, cityId);
    if (heros.length == 0) return;
    // 从城池归属中找到君主标识
    var lordId = data[period + 'CitySetOwn'][cityId];
    // 代表是无人占领城池
    if (lordId == 99) return;

    var isExist = false;
    // 通过 lordId 得到 heroId
    var heroId = data[period + 'HerosName'].indexOf(data[period + 'Lord'][lordId]);
    // 判断君主在不在武将列表中
    for (var i = 0; i < heros.length; i++) {
      if (heros[i].split(' ')[0] == heroId) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      return resUtil.setACityInfo(period, cityId, 2, parseInt(heroId) + 1);
    }
    // 获取城池中以智能降序排行的列表
    var newHeros = resUtil.getHerosSortByIndex(heros, 4, 'desc');

    // 取出 第 1 个序号，设其为太守
    resUtil.setACityInfo(period, cityId, 2, parseInt(newHeros[0].split(' ')[0]) + 1);
  },

  // 获取城池中在任武将
  getCityHeros: function(period, cityId) {
    return data[period + 'HerosInfo'].filter(function(data) {
      var info = data.split(' ');
      // 归属大于 0 且 城市为 cityId
      return (info[1] > 0) && (info[14] == (cityId + 1)); // 不要用三等号，类型可能不同
    });
  },

  // 获取城池中在野武将
  getCityHerosOnSide: function(period, cityId) {
    return data[period + 'HerosInfo'].filter(function(data) {
      var info = data.split(' ');
      return (info[1] == 0) && (info[14] == (cityId - 1));
    });
  },

  // 获取城池中的俘虏
  getCityHerosOnCell: function(period, cityId) {
    return data[period + 'HerosInfo'].filter(function(data) {
      var info = data.split(' ');
      return (info[1] == -1) && (info[14] == (cityId - 1));
    });
  },

  // 获取敌方在任武将
  getEnemyHeros: function(period, lordId) {
    return data[period + 'HerosInfo'].filter(function(data) {
      var info = data.split(' ');
      return (info[1] - 1) != lordId;
    });
  },

  // 获取敌方君主
  getEnemyLord: function(period, lordId) {
    // 排除掉自己
    var enemyLords = data[period + 'Lord'].splice(lordId, 1);
    return enemyLords.map(function(name) {
      // 通过名字获取到在武将中的索引位置
      var idx = data[period + 'HerosName'].indexOf(name);
      return data[period + 'HerosInfo'][idx];
    })
  },

  // 获取君主势力的在任武将
  getHerosByLordId: function(period, lordId) {
    return data[period + 'HerosInfo'].filter(function(data) {
      var info = data.split(' ');
      return (info[1] - 1) == lordId;
    });
  },

  // 获取敌方在任太守
  getEnemySatraps: function(period, lordId) {

  },

  // 武将根据某个属性排序
  getHerosSortByIndex: function(heros, index, orderBy) {
    return heros.sort(function(obj1, obj2) {
      var prop1 = parseInt(obj1.split(' ')[index]);
      var prop2 = parseInt(obj2.split(' ')[index]);
      if (orderBy == 'asc') {
        return prop1 > prop2 ? 1 : -1;
      }
      return prop1 > prop2 ? -1 : 1;
    })
  },

  // 修改(设置)某时期某个城池的属性
  setACityInfo: function(period, cityId, index, value) {
    var info = data[period + 'CityInfo'][cityId].split(' ');
    info[index] = value;
    data[period + 'CityInfo'][cityId] = info.join(' ');
  },

  // 修改(设置)某时期某个武将的属性
  setAHeroInfo: function(period, heroId, index, value) {
    var info = data[period + 'HerosInfo'][cityId].split(' ');
    info[index] = value;
    data[period + 'HerosInfo'][cityId] = info.join(' ');
  },

  // 修改(设置)某时期某个道具的属性
  setAGoodInfo: function(period, goodId, index, value) {
    var info = data[period + 'GoodsInfo'][goodId].split(' ');
    info[index] = value;
    data[period + 'GoodsInfo'][goodId] = info.join(' ');
  },

  // 获取城池中未装备的道具信息
  getGoodsOnCity: function(period, cityId) {
    return data[period + 'GoodsInfo'].filter(function(data) {
      var info = data.split(' ');
      // 未使用、当前城池、已出现的
      return (info[1] == 0) && (info[6] == (cityId - 1)) && (info[8] == 1);
    });
  },

  // 获取城池中在野的道具信息
  getGoodsOnSide: function(period, cityId) {
    return data[period + 'GoodsInfo'].filter(function(data) {
      var info = data.split(' ');
      // 未出现的、当前城池的
      return (info[8] == 0) && (info[6] == (cityId - 1));
    });
  }

}
