import { wApp } from '@morjs/core'
import { checkWxSession } from './services/usercenter/loginService';

wApp({
  globalData:  {
    isQy: false,
    session: {}
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    try {
      // 登录
      checkWxSession();
      // console.log("__wxConfig",__wxConfig);
      //isQiyeweixin
      const res = wx.getSystemInfoSync?.();
      // console.log(res.model)
      // console.log(res.pixelRatio)
      // console.log(res.windowWidth)
      // console.log(res.windowHeight)
      // console.log(res.language)
      // console.log(res.version)
      // console.log(res.platform)
      this.globalData.isQy = res?.environment === "wxwork";
      console.log("[zy]isQy", this.globalData.isQy);
  }
  catch (e) {
      // Do something when catch error
      console.log("[zy]app onLaunch catch", e);
  }
    // 登录
    wx.login({
      success: (res) => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
})
