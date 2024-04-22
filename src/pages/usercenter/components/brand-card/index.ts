// pages/usercenter/components/brand-card/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    loginType: {
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickBrand: function () { 
      wx.showModal({title:"zy2",content:"点击了品牌卡片"})
    }
  }
})