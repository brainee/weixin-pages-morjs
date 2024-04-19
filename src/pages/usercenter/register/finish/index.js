Page({
    data: {
        accountLogin: "认证申请等待…",
        stepDisabled: false,
    },
    finish() {
        wx.navigateTo({ url: `/pages/usercenter/login/account/index` });
        // wx.navigateTo({url:`/pages/cart/index`});
    },
    onLoad() {
        // checkWxSession();
        // wxLogin();
        wx.hideHomeButton();
    },
    onShow() {
        // this.getTabBar()?.init();
    },
});
export {};
