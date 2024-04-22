import { phoneLoginService, } from '../../../../services/usercenter/loginService';
Page({
    data: {
        formData: { account: "" }, //15600000000/Qqun@1438
        showPassword: false,
        accountLogin: "账号登录",
        stepDisabled: true,
        readedPolicy: false,
        isChecked: false,
        navigatorProps: {
            url: "/pages/usercenter/register/account/index"
        }
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        let flag = this.getVerificationCode(value);
        // flag = true;
        if (value.length > 11) {
            wx.showToast({
                "title": "手机号码不正确"
            });
        }
        if (!flag) {
            this.setData({
                stepDisabled: true,
            });
        }
        else {
            this.setData({
                stepDisabled: false,
            });
        }
        this.setData({
            formData: this.data.formData
        });
    },
    goLine(){
        this.goStep2();
        wx.navigateTo({ url: `/pages/line/index`}); 
    },
    goStep2() {
        let readedPolicy = this.data.readedPolicy;
        if (readedPolicy) {
            let account = this.data.formData.account;
            wx.navigateTo({ url: `/pages/usercenter/code/index?account=${account}&operate=login` });
        }
        else {
            wx.showToast({ title: "请先阅读 服务协议和隐私政策" });
        }
    },
    onLoad() {
        // checkWxSession();
        // wxLogin();
    },
    onShow() {
        // this.getTabBar()?.init();
    },
    getPhoneNumber(e) {
        let prefix = "[zy]getPhoneNumber";
        let { code, errMsg, iv, encryptedData } = e.detail;
        console.log(prefix, code, e, errMsg, iv, encryptedData);
        if (this.data?.readedPolicy) {
            let account = this.data.formData.account;
            if (errMsg.startsWith('getPhoneNumber:fail ')) {
                wx.showModal({
                    title: '获取失败',
                    showCancel: false,
                    content: errMsg,
                    success: function (res) { }
                });
            }
            else {
                console.log(prefix, "getPhoneNumber code success");
                let session = getApp().globalData?.session || {};
                let { openid, unionid } = session;
                phoneLoginService({ code, openid, unionid }).then((data) => {
                    //微信快捷登录完成
                    if (data) {
                        wx.showModal({
                            title: '提示',
                            showCancel: false,
                            content: '快捷登录成功',
                            success: function (res) {
                                wx.switchTab({ url: '/pages/cart/index' });
                            }
                        });
                    }
                    else {
                        wx.showToast({ title: "微信快捷登录失败" });
                    }
                });
            }
        }
        else {
            wx.showToast({ title: "请先阅读 服务协议和隐私政策" });
            return;
        }
    },
    onChangeOfRead(e) {
        wx.showToast({ title: JSON.stringify(e.detail) + "---" });
        // wx.showToast({ title: e.detail.checked + "" });
        this.setData({
            readedPolicy: e.detail.checked,
            isChecked: !this.data.isChecked,
        });
    },
    agreeUser(e) {
        wx.showToast({ title: "agreeUser" });
        return false;
    },
    agreePrivacy(e) {
        wx.showToast({ title: "agreePrivacy" });
        return false;
    },
    getVerificationCode: function (phone) {
        // https://developer.aliyun.com/article/1431953?spm=5176.26934562.main.1.33046d28Ikjk93
        var reg = /^1[3-9][0-9]{9}$/;
        var flag = reg.test(phone);
        return flag;
    },
});
