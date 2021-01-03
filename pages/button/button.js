// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'',
    name:''
  },
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  getphonenumber(e){
    console.log(e);
    
  },
  getUserInfo(e){
    console.log(e);
    this.setData({
      img:e.detail.userInfo.avatarUrl,
      name:e.detail.userInfo.nickName
    })
  },
  bindlaunchapp(e){
    console.log(e);
  },
  bindopensetting(e){
    console.log(e);
    
  }

})