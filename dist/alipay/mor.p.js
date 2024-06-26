var appConfig = {
  "pages": [
    "pages/home/home",
    "pages/usercenter/login/account/index",
    "pages/line/index",
    "pages/bar/index",
    "pages/usercenter/code/index",
    "pages/usercenter/login/pass/index",
    "pages/usercenter/reset/account/index",
    "pages/usercenter/reset/reset/index",
    "pages/usercenter/register/account/index",
    "pages/usercenter/register/pass/index",
    "pages/usercenter/register/mail/index",
    "pages/usercenter/register/finish/index",
    "pages/logs/logs",
    "pages/index/index"
  ],
  "usingComponents": {
    "navigation-bar": "/components/navigation-bar/navigation-bar",
    "ec-canvas": "/ec-canvas/ec-canvas",
    "t-image": "/components/webp-image/index",
    "t-icon": "tdesign-miniprogram/icon/icon",
    "t-loading": "tdesign-miniprogram/loading/loading",
    "t-popup": "tdesign-miniprogram/popup/popup",
    "t-cell-group": "tdesign-miniprogram/cell-group/cell-group",
    "t-cell": "tdesign-miniprogram/cell/cell",
    "t-input": "tdesign-miniprogram/input/input",
    "t-button": "tdesign-miniprogram/button/button",
    "t-radio": "tdesign-miniprogram/radio/radio",
    "t-link": "tdesign-miniprogram/link/link",
    "t-fab": "tdesign-miniprogram/fab/fab",
    "t-cascader": "tdesign-miniprogram/cascader/cascader",
    "t-search": "tdesign-miniprogram/search/search",
    "t-swiper": "tdesign-miniprogram/swiper/swiper",
    "t-swiper-nav": "tdesign-miniprogram/swiper-nav/swiper-nav",
    "t-toast": "tdesign-miniprogram/toast/toast",
    "t-tabs": "tdesign-miniprogram/tabs/tabs",
    "t-tab-panel": "tdesign-miniprogram/tab-panel/tab-panel"
  },
  "resolveAlias": {
    "config/*": "config/*",
    "services/*": "services/*",
    "model/*": "model/*",
    "utils/*": "utils/*",
    "components/*": "components/*",
    "tdesign-miniprogram/*": "miniprogram_npm/tdesign-miniprogram/*"
  },
  "tabBar": {
    "custom": true,
    "color": "#666666",
    "selectedColor": "#FF5F15",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "首页"
      },
      {
        "pagePath": "pages/index/index",
        "text": "分类"
      },
      {
        "pagePath": "pages/line/index",
        "text": "购物车"
      },
      {
        "pagePath": "pages/usercenter/login/account/index",
        "text": "我的"
      }
    ]
  },
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle": "black"
  },
  "sitemapLocation": "sitemap.json"
};
my.MOR_APP_CONFIG = appConfig;
export default appConfig;