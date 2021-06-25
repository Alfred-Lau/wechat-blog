// pages/playlist/playlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    swiperImageUrl:[
      {url: 'https://gw.alipayobjects.com/mdn/rms_ed9d16/afts/img/A*2z-FT7Tqv9YAAAAAAAAAAAAAARQnAQ'}
    ],
    jdList:[{
      id:1,
      title:'高级前端工程师', 
      jobDescription:['1. 负责 OceanBase 整体产品的前端方案设计和实现。','2. 负责 OceanBase 前端基础框架和工程服务相关设计和实现，包括但不限于 Ant Design、AntV、Umi、Dva、Egg 等开源项目的使用合作，以及 SQL 编辑器等前端重度产品方案研发实现。','3. 联合产品团队、运营团队、研发团队，寻找前端机会价值点对业务产生增值作用。'], 
      basic:['发布时间: 2021-06-22','工作地点: 北京/杭州','工作年限: 3年以上','所属部门: 蚂蚁集团','学历: 本科'], 
      requirement:['1. 熟练掌握 JavaScript、HTML、CSS 等原生前端基础技术，熟悉相关规范。','2. 熟练掌握 React / Vue / Angular 等常用前端框架以及配套社区项目（redux / rxjs / …）。','3. 对前端工程化有一定理解，熟练掌握 Webpack / Grunt / Gulp 等构建工具的使用和配置。','4. 了解不同浏览器平台的特性，能够很好地解决兼容问题，具备良好的 UI 交互实现能力。','5. 具备强烈的技术进取心，有良好的沟通与合作精神，拥有优秀的问题分析及解决能力。'],
      more:['1. 有数据库相关开发使用经验。','2. 同时具备 PC/无线 端的开发能力，有成功的中大型 Web 产品、移动应用开发经验。','3. 有服务端（Node.js / Java / PHP / Python等）相关开发经验。','4. 有大数据处理（Hadoop / Hive / Spark / Impala等）相关开发经验。','5. 有机器学习/深度学习、自然语言处理等人工智能相关开发经验。','6. 有优秀的独立开源项目或深度参与过业界知名的开源项目。']
    },
      {
        id:2,
        title:'前端专家',
        jobDescription:['1. 负责 OceanBase 整体产品的前端方案设计和实现。','2. 负责 OceanBase 前端基础框架和工程服务相关设计和实现，包括但不限于 Ant Design、AntV、Umi、Dva、Egg 等开源项目的使用合作，以及 SQL 编辑器等前端重度产品方案研发实现。','3. 联合产品团队、运营团队、研发团队，寻找前端机会价值点对业务产生增值作用。'], 
        basic:['发布时间: 2021-06-22','工作地点: 北京/杭州','工作年限: 3年以上','所属部门: 蚂蚁集团','学历: 本科'], 
        requirement:['1. 熟练掌握 JavaScript、HTML、CSS 等原生前端基础技术，熟悉相关规范。','2. 熟练掌握 React / Vue / Angular 等常用前端框架以及配套社区项目（redux / rxjs / …）。','3. 对前端工程化有一定理解，熟练掌握 Webpack / Grunt / Gulp 等构建工具的使用和配置。','4. 了解不同浏览器平台的特性，能够很好地解决兼容问题，具备良好的 UI 交互实现能力。','5. 具备强烈的技术进取心，有良好的沟通与合作精神，拥有优秀的问题分析及解决能力。'],
        more:['1. 有数据库相关开发使用经验。','2. 同时具备 PC/无线 端的开发能力，有成功的中大型 Web 产品、移动应用开发经验。','3. 有服务端（Node.js / Java / PHP / Python等）相关开发经验。','4. 有大数据处理（Hadoop / Hive / Spark / Impala等）相关开发经验。','5. 有机器学习/深度学习、自然语言处理等人工智能相关开发经验。','6. 有优秀的独立开源项目或深度参与过业界知名的开源项目。']
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'login',
    }).then(data=>{
      console.log(data)
      this.setData({
        openid:data.result.openid
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})