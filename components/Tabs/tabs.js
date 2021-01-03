// components/Tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     // 要接收的数据的名称
    // aaa:{
    //   // type  要接收的数据的类型 
    //   type:String,
    //   // value  默认值
    //   value:""
    // }
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // list:[
    //   {id:0,name:'首页',active:true},
    //   {id:1,name:'分类',active:false},
    //   {id:2,name:'商品',active:false},
    //   {id:3,name:'我的',active:false},
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handler(e){
      // const list = JSON.parse(JSON.stringify(this.data.list))
      const {index} = e.currentTarget.dataset
      // 点击事件触发的时候 
      // 触发父组件中的自定义事件 同时传递数据给  父组件  
      // this.triggerEvent("父组件自定义事件的名称",要传递的参数)
      // 传递的参数最好是用对象的形式
      this.triggerEvent('changeTab',{index:index})
    
    }
  }
})
