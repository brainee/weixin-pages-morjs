// pages/usercenter/validate-code/index.ts
import { getCurrentPageParam } from '../../../../utils/queryString';
import { wxLogin, getAccountSession } from '../../../../services/usercenter/loginService';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        account: "",
        showPassword: false,
        formData: {},
        stepDisabled: true,
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        let { account } = getCurrentPageParam() || {};
        console.log("[zy]got from last page:account", account);
        this.setData({ account });
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
    regain() {
        let { account, } = this.data;
        wx.navigateTo({ url: `/pages/usercenter/reset/account/index?account=${account}&operate=reset` });
    },
    switchCode() {
        console.log("[zy]switchCode");
        wx.navigateBack();
    },
    login: async function (res) {
        let account = this.data.account;
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
        getAccountSession({
            account,
            password,
            openid,
            unionid,
        }).then((data) => {
            if (data?.loginResponse?.flag) {
                wx.switchTab({ url: '/pages/cart/index' });
            }
            else if (data?.loginResponse?.errorMsg) {
                wx.showToast({ title: data?.loginResponse?.errorMsg });
            }
            else {
                wx.showToast({ title: "登录失败，请检查登录名称和密码" });
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
