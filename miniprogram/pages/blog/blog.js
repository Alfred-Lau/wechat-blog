// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '活动'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '技术'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '业务'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '消息'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '同学'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '团队'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '技术'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol:3,
    skin: false
  },
  // 打开官网
  openWebsite :function(){
    wx.navigateTo({
      url: './website.wxml',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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