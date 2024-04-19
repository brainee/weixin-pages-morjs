// pages/usercenter/validate-code/index.ts
import { getCurrentPageParam } from '../../../utils/queryString';
import { wxLogin, } from '../../../services/usercenter/loginService';
import { getSmsSession, sendSmsCodeService, validateSmsService, } from '../../../services/usercenter/smsService';
import { config } from '../../../config/index'
const default_mobile_prefix = config.default_mobile_prefix;
const default_sendsms_time = config.default_sendsms_time;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    isFocus: true,
    code: "",
    isRegain: false,
    timer: null,
    time: default_sendsms_time,
    leftSendTimes: 2,
    stepDisabled: true,
    validatedToken:"",
  },

  /* 生命周期函数--监听页面加载 */

  onLoad: function (options) {
    // console.log("[zy]options=",options);

    let { account, operate } = getCurrentPageParam() || {};
    console.log("[zy]got from last page:account", account);
    this.setData({
      account,
      operate
    });
    let mobile = account;
    let mobileprefix = default_mobile_prefix;
    const App = getApp();
    let { openid, unionid } = App?.globalData?.session;

    sendSmsCodeService({
      openid,
      unionid,
      mobile,
      mobileprefix
    }).then(e => {
      let { returnCode, maxSendTimes, message, leftSendTimes } = e || {};
      this.setData({
        leftSendTimes,
      });
      if (returnCode === 0) {
        this.countdown();
      } else {
        wx.showToast({ title: message || "验证码发送失败，请重试" });
        this.setData({
          isRegain: true,
        });
      }
      console.log("[zy]onLoad e", e)
    })

  },
  validateParam() {
    let mobile = this.data.account;
    let mobileprefix = default_mobile_prefix;
    let smsCode = this.data.code;
    const App = getApp();
    let { openid, unionid } = App?.globalData?.session;
    if (!mobile) {
      wx.showToast({
        icon: 'none',
        title: "账号不能为空",
      });
      return
    }

    if (!smsCode) {
      wx.showToast({
        icon: 'none',
        title: "验证码不能为空",
      });
      return
    }
    if (!openid) {
      wx.showToast({
        icon: 'none',
        title: "需要先登录小程序",
      });
      wxLogin();
      return
    }
    return true;
  },
  finishCode(){
    if (!this.validateParam()) {
      return;
    }

    let { operate } = this.data;
    if (["register", "reset"].indexOf(operate) > -1) {
      this.validateSmsCode();
    } else {//login
      this.login();
    }
  },

  async login() {

    let mobile = this.data.account;
    let mobileprefix = default_mobile_prefix;
    let smsCode = this.data.code;
    const App = getApp();
    let { openid, unionid } = App?.globalData?.session;
    let res = await getSmsSession({
      openid,
      unionid,
      mobile,
      smsCode,
      mobileprefix
    });

    if (res?.loginResponse?.flag) {
      wx.switchTab({ url: '/pages/cart/index' });
    } else if (res?.loginResponse?.errorMsg) {
      wx.showToast({ title: res?.loginResponse?.errorMsg })
    } else {
      wx.showToast({ title: "登录失败，请检查手机号码和验证码" })
    }
  },
  async validateSmsCode() {
    let { operate, } = this.data;
    let mobile = this.data.account;
    let mobileprefix = default_mobile_prefix;
    let smsCode = this.data.code;
    const App = getApp();
    let { openid, unionid } = App?.globalData?.session;
    let res = await validateSmsService({
      openid,
      unionid,
      mobile,
      smsCode,
      mobileprefix,
      operation:operate,
    });

    if (res.returnCode===0&&res?.token) {//data?.loginResponse?.token
      this.setData({
        stepDisabled: false,
        validatedToken:res?.token,
      })
    } else {
      wx.showToast({ title: res?.message || "验证码失效" })
    }
  },
  goNext() {
    let { account, operate,validatedToken, } = this.data;
    if (validatedToken) {
      if(operate==="reset"){
        wx.navigateTo({ url: `/pages/usercenter/reset/reset/index?account=${account}&token=${validatedToken}&operate=${operate}` });
      }else{
        wx.navigateTo({ url: `/pages/usercenter/register/pass/index?account=${account}&token=${validatedToken}&operate=${operate}` });
      }
    } else {
      wx.showToast({ title: "验证码错误，请重新尝试" });
      this.setData({ code: "" });
    }
  },
  regain() {
    this.setData({
      isRegain: false,
    });

    this.countdown();
  },
  switchPass() {
    let account = this.data.account;
    wx.navigateTo({ url: `/pages/usercenter/login/pass/index?account=${account}` });
  },
  getFocus() {
    this.setData({
      isFocus: true,
    });

  },

  getCode(e) {
    console.log("[zy]getCode", e)

    let code = e.detail.value;
    this.setData({
      code,
    });

    if (code.length === 6) {
      this.finishCode();
    }
  },

  countdown() {
    var currentTime = this.data.time

    let timer = setInterval(() => {
      currentTime--;

      this.setData({
        time: currentTime
      })

      if (currentTime <= 0) {
        clearInterval(timer)
        this.setData({
          time: default_sendsms_time,
          isRegain: true,
        })
      }

    }, 1000)

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})