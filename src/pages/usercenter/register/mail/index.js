// pages/usercenter/validate-code/index.ts
import { getCurrentPageParam } from '../../../../utils/queryString';
import { wxLogin, } from '../../../../services/usercenter/loginService';
import { trialService } from '../../../../services/usercenter/registerService';
import { config } from '../../../../config/index';
import { searchAreaService } from '../../../../services/airport/index';
import { findAirlinesService } from '../../../../services/airline/index';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        mykeys: {
            label: "areaName",
            value: "areaCode",
        },
        account: "",
        formData: {},
        stepDisabled: true,
        unitShowText: '',
        unitTitle: '',
        unitText: '',
        unitValue: [],
        airportText: '',
        airportValue: [],
        airportTitle: '',
        airlineText: '',
        airlineValue: [],
        airlineTitle: '',
        units: [
            { label: "机场", value: "1", key: "airport" },
            { label: "航司", value: "2", key: "airline" },
            { label: "其他", value: "3", key: "other" },
        ],
        citys: [
            { label: '北京市', value: '北京市' },
            { label: '上海市', value: '上海市' },
            { label: '广州市', value: '广州市' },
            { label: '深圳市', value: '深圳市' },
            { label: '成都市', value: '成都市' },
        ],
        airlines: []
    },
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
        // console.log("[zy]options=",options);
        let { account, operate, } = getCurrentPageParam() || {};
        console.log("[zy]got from last page:account", account, operate);
        this.setData({ account, operate });
        let pass = this.checkBase();
        // if(!pass){
        //   return;
        // }
        this.searchArea();
        this.findAirlines();
    },
    searchArea() {
        searchAreaService({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:21.282Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(data => {
            if (data?.length > 0) {
                this.setData({ citys: data });
            }
        });
    },
    findAirlines() {
        findAirlinesService({
            "head": { "uid": "", "token": "", "requestTime": "2024-04-07T02:18:25.687Z", "appId": "", "clientType": "1", "clientVersion": "", "moduleCode": "common", "chartTableCode": null },
            "type": 1
        }).then(data => {
            if (data?.length > 0) {
                this.setData({ airlines: data });
            }
        });
    },
    onPickOfCascader(e) {
        let prefix = "[zy]onPickOfCascader";
        console.log(prefix, e.detail);
    },
    onChangeOfCascader(e) {
        let prefix = "[zy]onChangeOfCascader";
        const { selectedOptions, value } = e.detail;
        let { unitText } = this.data;
        let airportText = selectedOptions[selectedOptions?.length - 1]?.areaName;
        console.log(prefix, e.detail);
        this.setData({
            airportValue: [value],
            airportText,
            airportVisible: false,
            unitShowText: `${unitText}:${airportText}`,
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
    onColumnChange(e) {
        console.log('picker pick:', e);
    },
    onPickerChangeOfAirline(e) {
        const { key } = e.currentTarget.dataset;
        const { label, value, } = e.detail;
        let { unitText } = this.data;
        let airlineText = label.join(' ');
        console.log('picker change:', e.detail);
        this.setData({
            [`${key}Visible`]: false,
            [`${key}Value`]: value,
            [`${key}Text`]: label.join(' '),
            unitShowText: `${unitText}:${airlineText}`,
        });
    },
    onPickerChangeOfUnit(e) {
        const { key } = e.currentTarget.dataset;
        const { label, value } = e.detail;
        let unitTypeKeys = this.data.units.map(unit => unit.key); //["airport", "airline", "other"]
        let unitTypeTitles = this.data.units.map(unit => unit.label);
        let index = value[0] - 1;
        let typeKey = unitTypeKeys[index];
        let typeTitle = unitTypeTitles[index];
        console.log('picker change:', typeKey, e.detail);
        let note = label.join(' ');
        this.setData({
            [`${key}Visible`]: false,
            [`${key}Value`]: value,
            [`${key}Text`]: note,
            [`${typeKey}Visible`]: true,
            [`${typeKey}Title`]: "选择" + typeTitle,
            unitShowText: note,
        });
    },
    onPickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
            [`${key}Visible`]: false,
        });
    },
    onTitlePicker() {
        this.setData({ unitVisible: true, unitTitle: '选择单位' });
    },
    inputChange2: function (e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
    },
    inputChangeNormal(e) {
        let prop = e.currentTarget.dataset.prop;
        let value = e.detail.value;
        this.data.formData[prop] = value;
        this.setData({
            formData: this.data.formData
        });
        let pass = this.check();
        this.setData({ stepDisabled: !pass });
    },
    getMainUnit() {
        let { unitValue, airportText, airportValue, airlineText, airlineValue } = this.data;
        let { unit } = this.data.formData;
        let mainUnitName = "", mainUnitCode = "";
        let demoType = +unitValue[0] || 0;
        if (demoType === 1) {
            mainUnitName = airportText,
                mainUnitCode = airportValue[0];
        }
        else if (demoType === 2) {
            mainUnitName = airlineText,
                mainUnitCode = airlineValue[0];
        }
        else {
            mainUnitName = unit;
        }
        return {
            mainUnitName,
            mainUnitCode,
            demoType,
        };
    },
    checkBase() {
        let { account, } = this.data;
        if (!account) {
            wx.showToast({
                icon: 'none',
                title: "账号不能为空",
            });
            return;
        }
        const App = getApp();
        let { openid, unionid } = App?.globalData?.session;
        if (!openid) {
            wx.showToast({
                icon: 'none',
                title: "需要先登录小程序",
            });
            wxLogin();
            return;
        }
        return true;
    },
    check(showTip) {
        let { name, depart, mail, } = this.data.formData;
        let { mainUnitName, mainUnitCode } = this.getMainUnit();
        if (!name) {
            showTip && wx.showToast({
                icon: 'none',
                title: "真实姓名不能为空",
            });
            return;
        }
        if (!depart) {
            showTip && wx.showToast({
                icon: 'none',
                title: "部门不能为空",
            });
            return;
        }
        if (!mail) {
            showTip && wx.showToast({
                icon: 'none',
                title: "邮箱不能为空",
            });
            return;
        }
        if (!mainUnitName) {
            showTip && wx.showToast({
                icon: 'none',
                title: "单位不能为空",
            });
            return;
        }
        return true;
    },
    submit: async function (res) {
        let pass = this.check(true);
        if (!pass)
            return;
        let { account, } = this.data;
        let { name, depart, mail, } = this.data.formData;
        const App = getApp();
        let { openid, unionid } = App?.globalData?.session;
        let { mainUnitName, mainUnitCode, demoType, } = this.getMainUnit();
        trialService({
            name,
            mobileprefix: config.default_mobile_prefix,
            mobile: account,
            mail,
            mainUnitName,
            mainUnitCode,
            remark: "",
            depart,
            title: "",
            budget: 0,
            persons: 0,
            demoType,
            openid,
            unionid,
        }).then((data) => {
            if (data) {
                wx.navigateTo({ url: '/pages/usercenter/register/finish/index' });
            }
            else {
                wx.showToast({ title: " 注册失败，请重试" });
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
