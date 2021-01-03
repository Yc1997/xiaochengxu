// pages/wx-components/wx-components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:0,name:'首页',active:true},
      {id:1,name:'分类',active:false},
      {id:2,name:'商品',active:false},
      {id:3,name:'我的',active:false},
    ]
  },
  changeTab(e){
    const {index} = e.detail
    const list = this.data.list
    list.forEach((item,i) => {
      // 让相同这一项的数据的active变为true即可
      return index===i?item.active=true:item.active=false
    })
    this.setData({
      list
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