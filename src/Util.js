var util = {
    // 根据将领名称在图片上显示头像
    getHeadImage: function(period, name) {
    // 从所有将领列表中获取君主的索引
    var imgIndex = data[period + 'HerosName'].indexOf(name);
    // 因为头像是分不同时间，并且所有的头像在一起的
    var texture = Laya.loader.getRes('img/head_' + period + '.jpg');
    // 通过索引算出头像在第几行，头像从左往右，从上往下数的
    var row = Math.floor(imgIndex / 10);
    // 算出头像在第几列
    var col = imgIndex % 10;
    // 通过截取的方式获得纹理切图: x, y, width, height
    return Laya.Texture.create(texture,  col * 120, row * 120, 120, 120);;
  }
}