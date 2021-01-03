// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:''
  },
  bindchange(e){
    this.setData({
      gender:e.detail.value
    })
  }
})