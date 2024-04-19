// pages/usercenter/login-account/index.ts
import { request } from '../../../../utils/request';
import { getCurrentPageParam, } from 'utils/queryString';
Page({
  data: {
    formData: {account:""},//15600000000/Qqun@1438
    accountLogin: "重置密码",
    stepDisabled:true,
  },
  inputChange: function (e) {
    let prop = e.currentTarget.dataset.prop
    let value = e.detail.value
    this.data.formData[prop] = value;
    let flag=this.getVerificationCode(value);
    // flag=true;
    if(value?.length>11){
      wx.showToast({
        "title": "手机号码不正确"
      });
    }
    if(!flag){
      this.setData({
        stepDisabled:true,
      });
    }else{
      this.setData({
        stepDisabled:false,
      });
    }
    this.setData({
      formData: this.data.formData
    })
  },
  goStep2(){
    let account=this.data.formData.account;
    let flag=this.getVerificationCode(account);
    
    if(flag){
      wx.navigateTo({url:`/pages/usercenter/code/index?account=${account}&operate=reset`});
    }
    
  },
  onLoad(){
    let { account,operate } = getCurrentPageParam() || {};
    console.log("[zy]got from last page:account", account);
    this.data.formData.account=account;
    this.setData({
      formData:this.data.formData,
      stepDisabled:!account,
    });
    // checkWxSession();
    // wxLogin();
  },
  onShow() {
    // this.getTabBar()?.init();
  },
  getVerificationCode: function (phone) {
    // https://developer.aliyun.com/article/1431953?spm=5176.26934562.main.1.33046d28Ikjk93
    var reg = /^1[3-9][0-9]{9}$/;
    var flag = reg.test(phone)
    return flag;
  },
})
