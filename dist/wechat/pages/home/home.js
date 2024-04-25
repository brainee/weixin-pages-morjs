"use strict";
(wx["mor_modules"] = wx["mor_modules"] || []).push([["pages/home/home"],{

/***/ "./model/good.js":
/*!***********************!*\
  !*** ./model/good.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genGood": function() { return /* binding */ genGood; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index */ "./config/index.js");


var imgPrefix = _config_index__WEBPACK_IMPORTED_MODULE_0__.cdnBase;
var defaultDesc = [imgPrefix + "/goods/details-1.png"];
var allGoods = [
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '0',
        title: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09b.png',
        ],
        video: null,
        available: 1,
        minSalePrice: 29800,
        minLinePrice: 29800,
        maxSalePrice: 29800,
        maxLinePrice: 40000,
        spuStockQuantity: 510,
        soldNum: 1020,
        isPutOnSale: 1,
        categoryIds: [
            '127880527393854975',
            '127880527393854976',
            '127880537778953984',
        ],
        specList: [
            {
                specId: '10011',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '10012',
                        specId: null,
                        saasId: null,
                        specValue: '米色荷叶边',
                        image: null,
                    },
                ],
            },
            {
                specId: '10013',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '11014',
                        specId: null,
                        saasId: null,
                        specValue: 'S',
                        image: null,
                    },
                    {
                        specValueId: '10014',
                        specId: null,
                        saasId: null,
                        specValue: 'M',
                        image: null,
                    },
                    {
                        specValueId: '11013',
                        specId: null,
                        saasId: null,
                        specValue: 'L',
                        image: null,
                    },
                ],
            },
        ],
        skuList: [
            {
                skuId: '135676631',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
                specInfo: [
                    {
                        specId: '10011',
                        specTitle: null,
                        specValueId: '10012',
                        specValue: null,
                    },
                    {
                        specId: '10013',
                        specTitle: null,
                        specValueId: '11014',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29800', priceTypeName: null },
                    { priceType: 2, price: '40000', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 175,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676632',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
                specInfo: [
                    {
                        specId: '10011',
                        specTitle: null,
                        specValueId: '10012',
                        specValue: null,
                    },
                    {
                        specId: '10013',
                        specTitle: null,
                        specValueId: '11013',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29800', priceTypeName: null },
                    { priceType: 2, price: '40000', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 158,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681631',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
                specInfo: [
                    {
                        specId: '10011',
                        specTitle: null,
                        specValueId: '10012',
                        specValue: null,
                    },
                    {
                        specId: '10013',
                        specTitle: null,
                        specValueId: '10014',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29800', priceTypeName: null },
                    { priceType: 2, price: '40000', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 177,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
        ],
        spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
        limitInfo: [
            {
                text: '限购5件',
            },
        ],
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09d.png',
        ],
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135686633',
        title: '纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料纯白短袖套头T恤',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
        minSalePrice: '25900',
        minLinePrice: '31900',
        maxSalePrice: '26900',
        maxLinePrice: '31900',
        isSoldOut: false,
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a1.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
        ],
        groupIdList: ['15029', '14023'],
        spuTagList: [
            {
                id: null,
                title: '2020夏季新款',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135686634',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '白色',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '10003',
                        specValue: 'M',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '25900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '31900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: -9,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691631',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '白色',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11003',
                        specValue: 'S',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '26900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '31900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 177,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691632',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '白色',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11002',
                        specValue: 'L',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '26900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '31900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 194,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        isAvailable: 1,
        spuStockQuantity: 371,
        soldNum: 1032,
        isPutOnSale: 1,
        specList: [
            {
                specId: '10000',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '10001',
                        specId: '10000',
                        saasId: '88888888',
                        specValue: '白色',
                        image: '',
                    },
                ],
            },
            {
                specId: '10002',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '11003',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: 'S',
                        image: '',
                    },
                    {
                        specValueId: '10003',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: 'M',
                        image: '',
                    },
                    {
                        specValueId: '11002',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: 'L',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08d.png',
        ],
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135691628',
        title: '运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png',
        ],
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
        minSalePrice: '25900',
        minLinePrice: '39900',
        maxSalePrice: '25900',
        maxLinePrice: '39900',
        isSoldOut: true,
        groupIdList: ['15029', '14023'],
        spuTagList: [
            {
                id: null,
                title: '2020夏季新款',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135686631',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: '军绿色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862494014208',
                        specValue: 'XS',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '25900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135686632',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: '军绿色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862007474176',
                        specValue: 'M',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '25900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691629',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: '军绿色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862175246592',
                        specValue: 'S',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '25900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691630',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: '军绿色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904861755815680',
                        specValue: 'L',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '25900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        isAvailable: 1,
        spuStockQuantity: 0,
        soldNum: 1022,
        isPutOnSale: 1,
        specList: [
            {
                specId: '127904180600844800',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '127904180768617216',
                        specId: '127904180600844800',
                        saasId: '88888888',
                        specValue: '军绿色',
                        image: '',
                    },
                ],
            },
            {
                specId: '127904861604820480',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '127904862494014208',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'XS',
                        image: '',
                    },
                    {
                        specValueId: '127904862175246592',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'S',
                        image: '',
                    },
                    {
                        specValueId: '127904862007474176',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'M',
                        image: '',
                    },
                    {
                        specValueId: '127904861755815680',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'L',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17d.png',
        ],
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135686623',
        title: '腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png',
        ],
        minSalePrice: '9900',
        minLinePrice: '16900',
        maxSalePrice: '10900',
        maxLinePrice: '16900',
        isSoldOut: false,
        groupIdList: [
            '15029',
            '15030',
            '14023',
            '127886731843219200',
            '127886732665303040',
            '127886733101511680',
            '127886733923595520',
            '14025',
            '127886726071855616',
            '14026',
            '127886727481142784',
            '127886731440566784',
        ],
        spuTagList: [
            {
                id: null,
                title: '联名系列',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135686624',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '经典白',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '10003',
                        specValue: '节能套装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '9900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 98,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135686625',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '11000',
                        specValue: '贵族青',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11003',
                        specValue: '经典套装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '9900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 100,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135686626',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '11000',
                        specValue: '经典白',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11002',
                        specValue: '尊享礼盒装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '9900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 100,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691622',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '经典白',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11003',
                        specValue: 'S',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '9900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 100,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691623',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '10001',
                        specValue: '经典白',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '11002',
                        specValue: '尊享礼盒装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '10900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 100,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135691624',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10000',
                        specTitle: null,
                        specValueId: '11000',
                        specValue: '贵族青',
                    },
                    {
                        specId: '10002',
                        specTitle: null,
                        specValueId: '10003',
                        specValue: '节能套装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '9900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '16900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 100,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        isAvailable: 1,
        spuStockQuantity: 598,
        soldNum: 102,
        isPutOnSale: 1,
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3d.png',
        ],
        specList: [
            {
                specId: '10000',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '10001',
                        specId: '10000',
                        saasId: '88888888',
                        specValue: '经典白',
                        image: '',
                    },
                    {
                        specValueId: '11000',
                        specId: '10000',
                        saasId: '88888888',
                        specValue: '贵族青',
                        image: '',
                    },
                ],
            },
            {
                specId: '10002',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '11003',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: '经典套装',
                        image: '',
                    },
                    {
                        specValueId: '10003',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: '节能套装',
                        image: '',
                    },
                    {
                        specValueId: '11002',
                        specId: '10002',
                        saasId: '88888888',
                        specValue: '尊享礼盒装',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135681628',
        title: '带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a1.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3b.png',
        ],
        minSalePrice: '29900',
        minLinePrice: '39900',
        maxSalePrice: '39900',
        maxLinePrice: '39900',
        isSoldOut: false,
        groupIdList: [
            '14023',
            '127886732245873408',
            '127886733487386880',
            '14025',
            '127886726071855616',
            '14026',
            '127886728420666112',
            '127886728957538048',
            '127886729779621888',
            '127886730165497088',
            '127886730652037376',
            '127886731037912576',
            '127886731440566784',
            '127886729360190464',
            '15029',
            '15030',
        ],
        spuTagList: [
            {
                id: null,
                title: '限时抢购',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135676629',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: '浅灰色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862175246592',
                        specValue: 'S',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '29900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 80,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676630',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: '浅灰色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904861755815680',
                        specValue: 'L',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '39900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 122,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681629',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: '浅灰色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862007474176',
                        specValue: 'M',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '39900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '39900',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 119,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png',
        ],
        isAvailable: 1,
        spuStockQuantity: 321,
        soldNum: 102,
        isPutOnSale: 1,
        specList: [
            {
                specId: '127904180600844800',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '127904181322265856',
                        specId: '127904180600844800',
                        saasId: '88888888',
                        specValue: '浅灰色',
                        image: '',
                    },
                ],
            },
            {
                specId: '127904861604820480',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '127904862175246592',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'S',
                        image: '',
                    },
                    {
                        specValueId: '127904862007474176',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'M',
                        image: '',
                    },
                    {
                        specValueId: '127904861755815680',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: 'L',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135681626',
        title: '迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a1.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2b.png',
        ],
        minSalePrice: '29000',
        minLinePrice: '40000',
        maxSalePrice: '39000',
        maxLinePrice: '40000',
        isSoldOut: false,
        groupIdList: [
            '15029',
            '15030',
            '14023',
            '127886732245873408',
            '127886733487386880',
            '14025',
            '127886726071855616',
            '14026',
            '127886728420666112',
            '127886728957538048',
            '127886730652037376',
            '127886731037912576',
        ],
        spuTagList: [
            {
                id: null,
                title: '限时抢购',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135676627',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10006',
                        specTitle: null,
                        specValueId: '10007',
                        specValue: '黑色',
                    },
                    {
                        specId: '11007',
                        specTitle: null,
                        specValueId: '10009',
                        specValue: '简约款',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '29000',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '40000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 123,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676628',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10006',
                        specTitle: null,
                        specValueId: '10007',
                        specValue: '黑色',
                    },
                    {
                        specId: '11007',
                        specTitle: null,
                        specValueId: '10008',
                        specValue: '礼盒装',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '39000',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '40000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 123,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681627',
                skuImage: null,
                specInfo: [
                    {
                        specId: '10006',
                        specTitle: null,
                        specValueId: '10007',
                        specValue: '黑色',
                    },
                    {
                        specId: '11007',
                        specTitle: null,
                        specValueId: '11008',
                        specValue: '带充电线简约款',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '39000',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '40000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 120,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2d.png',
        ],
        isAvailable: 1,
        spuStockQuantity: 366,
        soldNum: 102,
        isPutOnSale: 1,
        specList: [
            {
                specId: '10006',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '10007',
                        specId: '10006',
                        saasId: '88888888',
                        specValue: '黑色',
                        image: '',
                    },
                ],
            },
            {
                specId: '11007',
                title: '类型',
                specValueList: [
                    {
                        specValueId: '10009',
                        specId: '11007',
                        saasId: '88888888',
                        specValue: '简约款',
                        image: '',
                    },
                    {
                        specValueId: '11008',
                        specId: '11007',
                        saasId: '88888888',
                        specValue: '带充电线简约款',
                        image: '',
                    },
                    {
                        specValueId: '10008',
                        specId: '11007',
                        saasId: '88888888',
                        specValue: '礼盒款',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135681622',
        title: '简约餐盘耐热家用盘子菜盘套装多颜色简约餐盘耐热家用盘子',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a2.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1b.png',
        ],
        minSalePrice: '129900',
        minLinePrice: '218000',
        maxSalePrice: '139900',
        maxLinePrice: '218000',
        isSoldOut: false,
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1d.png',
        ],
        groupIdList: [
            '14023',
            '127886732665303040',
            '127886733101511680',
            '127886733923595520',
            '14025',
            '127886726071855616',
            '14026',
            '127886728957538048',
            '127886727481142784',
            '127886729779621888',
            '127886730165497088',
            '127886730652037376',
            '127886731440566784',
            '127886729360190464',
            '15029',
            '15030',
        ],
        spuTagList: [
            {
                id: null,
                title: '掌柜热卖',
                image: null,
            },
        ],
        skuList: [
            {
                skuId: '135676623',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181506815488',
                        specValue: '奶黄色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862175246592',
                        specValue: '单盘',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '129900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '218000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 119,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676624',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181506815488',
                        specValue: '奶黄色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904861755815680',
                        specValue: '盘+碗',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '139900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '218000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 116,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681623',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181506815488',
                        specValue: '奶黄色',
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862007474176',
                        specValue: '单盘',
                    },
                ],
                priceInfo: [
                    {
                        priceType: 1,
                        price: '139900',
                        priceTypeName: '销售价格',
                    },
                    {
                        priceType: 2,
                        price: '218000',
                        priceTypeName: '划线价格',
                    },
                ],
                stockInfo: {
                    stockQuantity: 122,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: null,
                volume: null,
                profitPrice: null,
            },
        ],
        isAvailable: 1,
        spuStockQuantity: 357,
        soldNum: 23102,
        isPutOnSale: 1,
        specList: [
            {
                specId: '127904180600844800',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '127904181506815488',
                        specId: '127904180600844800',
                        saasId: '88888888',
                        specValue: '奶黄色',
                        image: '',
                    },
                ],
            },
            {
                specId: '127904861604820480',
                title: '类型',
                specValueList: [
                    {
                        specValueId: '127904862175246592',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: '单盘',
                        image: '',
                    },
                    {
                        specValueId: '127904862007474176',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: '单碗',
                        image: '',
                    },
                    {
                        specValueId: '127904861755815680',
                        specId: '127904861604820480',
                        saasId: '88888888',
                        specValue: '盘+碗',
                        image: '',
                    },
                ],
            },
        ],
        promotionList: null,
        minProfitPrice: null,
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135681624',
        title: '不锈钢刀叉勺套装家用西餐餐具ins简约耐用不锈钢金色银色可选',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
        images: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a1.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
        ],
        video: null,
        available: 1,
        minSalePrice: '19900',
        minLinePrice: '19900',
        maxSalePrice: '29900',
        maxLinePrice: '29900',
        spuStockQuantity: 0,
        soldNum: 102,
        isPutOnSale: 1,
        categoryIds: [
            '127880527393854975',
            '127880527393854977',
            '127880526789875961',
        ],
        specList: [
            {
                specId: '127904180600844800',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '127904180768617216',
                        specId: null,
                        saasId: null,
                        specValue: '奶黄色',
                        image: null,
                    },
                ],
            },
            {
                specId: '127904861604820480',
                title: '数量',
                specValueList: [
                    {
                        specValueId: '127904862175246592',
                        specId: null,
                        saasId: null,
                        specValue: '三件套',
                        image: null,
                    },
                    {
                        specValueId: '127904862007474176',
                        specId: null,
                        saasId: null,
                        specValue: '六件套',
                        image: null,
                    },
                    {
                        specValueId: '127904861755815680',
                        specId: null,
                        saasId: null,
                        specValue: '八件套',
                        image: null,
                    },
                ],
            },
        ],
        skuList: [
            {
                skuId: '135676625',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862175246592',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '19900', priceTypeName: null },
                    { priceType: 2, price: '29900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676626',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904861755815680',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29900', priceTypeName: null },
                    { priceType: 2, price: '29900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681625',
                skuImage: null,
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904180768617216',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862007474176',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29900', priceTypeName: null },
                    { priceType: 2, price: '29900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 0,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
        ],
        spuTagList: [{ id: '19011', title: '2020秋季新款', image: null }],
        spuLimitList: null,
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2d.png',
        ],
        etitle: '',
    },
    {
        saasId: '88888888',
        storeId: '1000',
        spuId: '135681628',
        title: '带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩',
        primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
        images: ['https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png'],
        video: null,
        available: 1,
        minSalePrice: '29900',
        minLinePrice: '29900',
        maxSalePrice: '39900',
        maxLinePrice: '39900',
        spuStockQuantity: 321,
        soldNum: 103,
        isPutOnSale: 1,
        categoryIds: [
            '127880527393854975',
            '127880527393854977',
            '127880526789875961',
        ],
        specList: [
            {
                specId: '127904180600844800',
                title: '颜色',
                specValueList: [
                    {
                        specValueId: '127904181322265856',
                        specId: null,
                        saasId: null,
                        specValue: '浅灰色',
                        image: null,
                    },
                ],
            },
            {
                specId: '127904861604820480',
                title: '尺码',
                specValueList: [
                    {
                        specValueId: '127904862175246592',
                        specId: null,
                        saasId: null,
                        specValue: 'S',
                        image: null,
                    },
                    {
                        specValueId: '127904862007474176',
                        specId: null,
                        saasId: null,
                        specValue: 'M',
                        image: null,
                    },
                    {
                        specValueId: '127904861755815680',
                        specId: null,
                        saasId: null,
                        specValue: 'L',
                        image: null,
                    },
                ],
            },
        ],
        skuList: [
            {
                skuId: '135676629',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862175246592',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '29900', priceTypeName: null },
                    { priceType: 2, price: '39900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 80,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135676630',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904861755815680',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '39900', priceTypeName: null },
                    { priceType: 2, price: '39900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 122,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
            {
                skuId: '135681629',
                skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
                specInfo: [
                    {
                        specId: '127904180600844800',
                        specTitle: null,
                        specValueId: '127904181322265856',
                        specValue: null,
                    },
                    {
                        specId: '127904861604820480',
                        specTitle: null,
                        specValueId: '127904862007474176',
                        specValue: null,
                    },
                ],
                priceInfo: [
                    { priceType: 1, price: '39900', priceTypeName: null },
                    { priceType: 2, price: '39900', priceTypeName: null },
                ],
                stockInfo: {
                    stockQuantity: 119,
                    safeStockQuantity: 0,
                    soldQuantity: 0,
                },
                weight: { value: null, unit: 'KG' },
                volume: null,
                profitPrice: null,
            },
        ],
        spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
        spuLimitList: null,
        desc: [
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png',
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png',
        ],
        etitle: '',
    },
];
/**
 * @param {string} id
 * @param {number} [available] 库存, 默认1
 */
function genGood(id, available) {
    if (available === void 0) { available = 1; }
    var specID = ['135681624', '135681628'];
    if (specID.indexOf(id) > -1) {
        return allGoods.filter(function (good) { return good.spuId === id; })[0];
    }
    var item = allGoods[id % allGoods.length];
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item), { spuId: "" + id, available: available, desc: (item === null || item === void 0 ? void 0 : item.desc) || defaultDesc, images: (item === null || item === void 0 ? void 0 : item.images) || [item === null || item === void 0 ? void 0 : item.primaryImage] });
}


/***/ }),

/***/ "./model/goods.js":
/*!************************!*\
  !*** ./model/goods.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGoodsList": function() { return /* binding */ getGoodsList; }
/* harmony export */ });
/* unused harmony export goodsList */
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./good */ "./model/good.js");

function getGoodsList(baseID, length) {
    if (baseID === void 0) { baseID = 0; }
    if (length === void 0) { length = 10; }
    return new Array(length).fill(0).map(function (_, idx) { return (0,_good__WEBPACK_IMPORTED_MODULE_0__.genGood)(idx + baseID); });
}
var goodsList = getGoodsList();


/***/ }),

/***/ "./model/swiper.js":
/*!*************************!*\
  !*** ./model/swiper.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genSwiperImageList": function() { return /* binding */ genSwiperImageList; }
/* harmony export */ });
// const images = [
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
//     text: '1',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
//     text: '2',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
//     text: '3',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
//     text: '4',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
//     text: '5',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
//     text: '6',
//   },
// ];
var images = [
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
];
function genSwiperImageList() {
    return images;
}


/***/ }),

/***/ "./services/_utils/delay.js":
/*!**********************************!*\
  !*** ./services/_utils/delay.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": function() { return /* binding */ delay; }
/* harmony export */ });
function delay(ms) {
    if (ms === void 0) { ms = 200; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}


/***/ }),

/***/ "./services/good/fetchGoods.js":
/*!*************************************!*\
  !*** ./services/good/fetchGoods.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.fetchGoodsList = void 0;
var index_1 = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/** 获取商品列表 */
function mockFetchGoodsList(pageIndex, pageSize) {
    if (pageIndex === void 0) { pageIndex = 1; }
    if (pageSize === void 0) { pageSize = 20; }
    var delay = (__webpack_require__(/*! ../_utils/delay */ "./services/_utils/delay.js").delay);
    var getGoodsList = (__webpack_require__(/*! ../../model/goods */ "./model/goods.js").getGoodsList);
    return delay().then(function () {
        return getGoodsList(pageIndex, pageSize).map(function (item) {
            return {
                spuId: item.spuId,
                thumb: item.primaryImage,
                title: item.title,
                price: item.minSalePrice,
                originPrice: item.maxLinePrice,
                tags: item.spuTagList.map(function (tag) { return tag.title; }),
            };
        });
    });
}
/** 获取商品列表 */
function fetchGoodsList(pageIndex, pageSize) {
    if (pageIndex === void 0) { pageIndex = 1; }
    if (pageSize === void 0) { pageSize = 20; }
    if (index_1.config.useMock) {
        return mockFetchGoodsList(pageIndex, pageSize);
    }
    return new Promise(function (resolve) {
        resolve('real api');
    });
}
exports.fetchGoodsList = fetchGoodsList;


/***/ }),

/***/ "./services/home/home.js":
/*!*******************************!*\
  !*** ./services/home/home.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.fetchHome = void 0;
var index_1 = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/** 获取首页数据 */
function mockFetchHome() {
    var delay = (__webpack_require__(/*! ../_utils/delay */ "./services/_utils/delay.js").delay);
    var genSwiperImageList = (__webpack_require__(/*! ../../model/swiper */ "./model/swiper.js").genSwiperImageList);
    return delay().then(function () {
        return {
            swiper: genSwiperImageList(),
            tabList: [
                {
                    text: '精选推荐',
                    key: 0,
                },
                {
                    text: '夏日防晒',
                    key: 1,
                },
                {
                    text: '二胎大作战',
                    key: 2,
                },
                {
                    text: '人气榜',
                    key: 3,
                },
                {
                    text: '好评榜',
                    key: 4,
                },
                {
                    text: 'RTX 30',
                    key: 5,
                },
                {
                    text: '手机也疯狂',
                    key: 6,
                },
            ],
            activityImg: index_1.cdnBase + "/activity/banner.png",
        };
    });
}
/** 获取首页数据 */
function fetchHome() {
    if (index_1.config.useMock) {
        return mockFetchHome();
    }
    return new Promise(function (resolve) {
        resolve('real api');
    });
}
exports.fetchHome = fetchHome;


/***/ }),

/***/ "./pages/home/home.ts":
/*!****************************!*\
  !*** ./pages/home/home.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tdesign-miniprogram/toast/index */ "../node_modules/tdesign-miniprogram/miniprogram_dist/toast/index.js");
/* harmony import */ var _services_good_fetchGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/good/fetchGoods */ "./services/good/fetchGoods.js");
/* harmony import */ var _services_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home/home */ "./services/home/home.js");


// import { checkWxSession} from 'services/usercenter/loginService';


Page({
    data: {
        imgSrcs: [],
        tabList: [],
        goodsList: [],
        goodsListLoadStatus: 0,
        pageLoading: false,
        current: 1,
        autoplay: true,
        duration: '500',
        interval: 5000,
        navigation: { type: 'dots' },
        swiperImageProps: { mode: 'scaleToFill' },
    },
    handleClick: function (e) {
        console.log("[zy]fab handleClick", e);
    },
    goodListPagination: {
        index: 0,
        num: 20,
    },
    privateData: {
        tabIndex: 0,
    },
    onShow: function () {
        var _a, _b;
        (_b = (_a = this === null || this === void 0 ? void 0 : this.getTabBar) === null || _a === void 0 ? void 0 : _a.call(this)) === null || _b === void 0 ? void 0 : _b.init();
    },
    onLoad: function () {
        this.init();
    },
    onReachBottom: function () {
        if (this.data.goodsListLoadStatus === 0) {
            this.loadGoodsList();
        }
    },
    onPullDownRefresh: function () {
        this.init();
    },
    init: function () {
        this.loadHomePage();
    },
    loadHomePage: function () {
        var _this = this;
        wx.stopPullDownRefresh();
        this.setData({
            pageLoading: true,
        });
        (0,_services_home_home__WEBPACK_IMPORTED_MODULE_2__.fetchHome)().then(function (_a) {
            var swiper = _a.swiper, tabList = _a.tabList;
            _this.setData({
                tabList: tabList,
                imgSrcs: swiper,
                pageLoading: false,
            });
            _this.loadGoodsList(true);
        });
    },
    tabChangeHandle: function (e) {
        this.privateData.tabIndex = e.detail;
        this.loadGoodsList(true);
    },
    onReTry: function () {
        this.loadGoodsList();
    },
    loadGoodsList: function (fresh) {
        if (fresh === void 0) { fresh = false; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var pageSize, pageIndex, nextList, err_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fresh) {
                            wx.pageScrollTo({
                                scrollTop: 0,
                            });
                        }
                        this.setData({ goodsListLoadStatus: 1 });
                        pageSize = this.goodListPagination.num;
                        pageIndex = this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
                        if (fresh) {
                            pageIndex = 0;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0,_services_good_fetchGoods__WEBPACK_IMPORTED_MODULE_1__.fetchGoodsList)(pageIndex, pageSize)];
                    case 2:
                        nextList = _a.sent();
                        this.setData({
                            goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
                            goodsListLoadStatus: 0,
                        });
                        this.goodListPagination.index = pageIndex;
                        this.goodListPagination.num = pageSize;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.setData({ goodsListLoadStatus: 3 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    goodListClickHandle: function (e) {
        var index = e.detail.index;
        var spuId = this.data.goodsList[index].spuId;
        wx.navigateTo({
            url: "/pages/goods/details/index?spuId=" + spuId,
        });
    },
    goodListAddCartHandle: function () {
        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__["default"])({
            context: this,
            selector: '#t-toast',
            message: '点击加入购物车',
        });
    },
    navToSearchPage: function () {
        wx.navigateTo({ url: '/pages/goods/search/index' });
    },
    navToActivityDetail: function (_a) {
        var detail = _a.detail;
        var _b = (detail || {}).index, promotionID = _b === void 0 ? 0 : _b;
        wx.navigateTo({
            url: "/pages/promotion-detail/index?promotion_id=" + promotionID,
        });
    },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/home/home.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=home.js.map