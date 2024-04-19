// pages/usercenter/validate-code/index.ts
import { getCurrentPageParam } from '../../../../utils/queryString';
import { resetPasswordService, } from '../../../../services/usercenter/resetService';
import { wxLogin } from '../../../../services/usercenter/loginService';
import { config } from '../../../../config/index';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        account: "",
        token: "", //smsToken
        showPassword: false,
        formData: {},
        stepDisabled: true,
        operate: "",
        mainTitle: "设置新密码",
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        let { account, token, operate } = getCurrentPageParam() || {};
        console.log("[zy]got from last page:account", account);
        if (!token) {
            wx.showToast({ title: "验证码错误，请重新尝试" });
            wx.navigateBack();
            return;
        }
        let mainTitle = this.data.mainTitle;
        if (operate == "register") {
            mainTitle = "设置登录密码";
        }
        else if (operate == "reset") {
            mainTitle = "设置新密码";
        }
        this.setData({ account, token, operate, mainTitle });
    },
    changEye: function () {
        this.setData({
            showPassword: !this.data.showPassword
        });
    },
    inputChange: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    inputChange2(e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.setData({ stepDisabled: !value });
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    resetPass: async function (res) {
        let { account, token, operate, } = this.data;
        let password = this.data.formData.password;
        const App = getApp();
        let { openid, unionid } = App?.globalData?.session;
        if (!account) {
            wx.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        if (!password) {
            wx.showToast({
                icon: 'none',
                title: "密码不能为空",
            });
            return;
        }
        if (!openid) {
            wx.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            await wxLogin();
            return;
        }
        resetPasswordService({
            mobile: account,
            mobileprefix: config.default_mobile_prefix,
            password,
            token,
            operation: operate,
            openid,
            unionid,
        }).then((data) => {
            if (data) {
                wx.showModal({
                    title: '重置成功',
                    content: "",
                    confirmText: '去登录',
                    showCancel: false,
                    success: (res) => {
                        if (res?.cancel) {
                        }
                        if (res.confirm) {
                            wx.navigateTo({ url: '/pages/usercenter/login/account/index' });
                        }
                    }
                });
            }
        });
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
});
