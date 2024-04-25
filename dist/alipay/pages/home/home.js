"use strict";
(my["mor_modules"] = my["mor_modules"] || []).push([["pages/home/home"],{

/***/ "./model/good.js":
/*!***********************!*\
  !*** ./model/good.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genGood": function() { return /* binding */ genGood; }
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index */ "./config/index.js");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

const imgPrefix = _config_index__WEBPACK_IMPORTED_MODULE_0__.cdnBase;
const defaultDesc = [`${imgPrefix}/goods/details-1.png`];
const allGoods = [
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "0",
    title: "\u767D\u8272\u77ED\u8896\u8FDE\u8863\u88D9\u8377\u53F6\u8FB9\u88D9\u6446\u5BBD\u677E\u97E9\u7248\u4F11\u95F2\u7EAF\u767D\u6E05\u723D\u4F18\u96C5\u8FDE\u8863\u88D9",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09b.png"
    ],
    video: null,
    available: 1,
    minSalePrice: 29800,
    minLinePrice: 29800,
    maxSalePrice: 29800,
    maxLinePrice: 4e4,
    spuStockQuantity: 510,
    soldNum: 1020,
    isPutOnSale: 1,
    categoryIds: [
      "127880527393854975",
      "127880527393854976",
      "127880537778953984"
    ],
    specList: [
      {
        specId: "10011",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "10012",
            specId: null,
            saasId: null,
            specValue: "\u7C73\u8272\u8377\u53F6\u8FB9",
            image: null
          }
        ]
      },
      {
        specId: "10013",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "11014",
            specId: null,
            saasId: null,
            specValue: "S",
            image: null
          },
          {
            specValueId: "10014",
            specId: null,
            saasId: null,
            specValue: "M",
            image: null
          },
          {
            specValueId: "11013",
            specId: null,
            saasId: null,
            specValue: "L",
            image: null
          }
        ]
      }
    ],
    skuList: [
      {
        skuId: "135676631",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
        specInfo: [
          {
            specId: "10011",
            specTitle: null,
            specValueId: "10012",
            specValue: null
          },
          {
            specId: "10013",
            specTitle: null,
            specValueId: "11014",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29800", priceTypeName: null },
          { priceType: 2, price: "40000", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 175,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676632",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
        specInfo: [
          {
            specId: "10011",
            specTitle: null,
            specValueId: "10012",
            specValue: null
          },
          {
            specId: "10013",
            specTitle: null,
            specValueId: "11013",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29800", priceTypeName: null },
          { priceType: 2, price: "40000", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 158,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681631",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
        specInfo: [
          {
            specId: "10011",
            specTitle: null,
            specValueId: "10012",
            specValue: null
          },
          {
            specId: "10013",
            specTitle: null,
            specValueId: "10014",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29800", priceTypeName: null },
          { priceType: 2, price: "40000", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 177,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      }
    ],
    spuTagList: [{ id: "13001", title: "\u9650\u65F6\u62A2\u8D2D", image: null }],
    limitInfo: [
      {
        text: "\u9650\u8D2D5\u4EF6"
      }
    ],
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09d.png"
    ],
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135686633",
    title: "\u7EAF\u8272\u7EAF\u68C9\u4F11\u95F2\u5706\u9886\u77ED\u8896T\u6064\u7EAF\u767D\u4EB2\u80A4\u539A\u67D4\u8F6F\u7EC6\u817B\u9762\u6599\u7EAF\u767D\u77ED\u8896\u5957\u5934T\u6064",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png",
    minSalePrice: "25900",
    minLinePrice: "31900",
    maxSalePrice: "26900",
    maxLinePrice: "31900",
    isSoldOut: false,
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a1.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png"
    ],
    groupIdList: ["15029", "14023"],
    spuTagList: [
      {
        id: null,
        title: "2020\u590F\u5B63\u65B0\u6B3E",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135686634",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u767D\u8272"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "10003",
            specValue: "M"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "25900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "31900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: -9,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691631",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u767D\u8272"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11003",
            specValue: "S"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "26900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "31900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 177,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691632",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u767D\u8272"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11002",
            specValue: "L"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "26900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "31900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 194,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    isAvailable: 1,
    spuStockQuantity: 371,
    soldNum: 1032,
    isPutOnSale: 1,
    specList: [
      {
        specId: "10000",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "10001",
            specId: "10000",
            saasId: "88888888",
            specValue: "\u767D\u8272",
            image: ""
          }
        ]
      },
      {
        specId: "10002",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "11003",
            specId: "10002",
            saasId: "88888888",
            specValue: "S",
            image: ""
          },
          {
            specValueId: "10003",
            specId: "10002",
            saasId: "88888888",
            specValue: "M",
            image: ""
          },
          {
            specValueId: "11002",
            specId: "10002",
            saasId: "88888888",
            specValue: "L",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: "",
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08d.png"
    ]
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135691628",
    title: "\u8FD0\u52A8\u8FDE\u5E3D\u62C9\u94FE\u536B\u8863\u4F11\u95F2\u5F00\u886B\u957F\u8896\u591A\u8272\u8FD0\u52A8\u7EC6\u7ED2\u9762\u6599\u8FD0\u52A8\u4E0A\u8863",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png"
    ],
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
    minSalePrice: "25900",
    minLinePrice: "39900",
    maxSalePrice: "25900",
    maxLinePrice: "39900",
    isSoldOut: true,
    groupIdList: ["15029", "14023"],
    spuTagList: [
      {
        id: null,
        title: "2020\u590F\u5B63\u65B0\u6B3E",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135686631",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: "\u519B\u7EFF\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862494014208",
            specValue: "XS"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "25900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135686632",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: "\u519B\u7EFF\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862007474176",
            specValue: "M"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "25900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691629",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: "\u519B\u7EFF\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862175246592",
            specValue: "S"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "25900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691630",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: "\u519B\u7EFF\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904861755815680",
            specValue: "L"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "25900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    isAvailable: 1,
    spuStockQuantity: 0,
    soldNum: 1022,
    isPutOnSale: 1,
    specList: [
      {
        specId: "127904180600844800",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "127904180768617216",
            specId: "127904180600844800",
            saasId: "88888888",
            specValue: "\u519B\u7EFF\u8272",
            image: ""
          }
        ]
      },
      {
        specId: "127904861604820480",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "127904862494014208",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "XS",
            image: ""
          },
          {
            specValueId: "127904862175246592",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "S",
            image: ""
          },
          {
            specValueId: "127904862007474176",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "M",
            image: ""
          },
          {
            specValueId: "127904861755815680",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "L",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: "",
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17d.png"
    ]
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135686623",
    title: "\u817E\u8BAF\u6781\u5149\u76D2\u5B504\u667A\u80FD\u7F51\u7EDC\u7535\u89C6\u673A\u9876\u76D26K\u5343\u5146\u7F51\u7EDC\u673A\u9876\u76D24K\u9AD8\u5206\u8FA8\u7387",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png"
    ],
    minSalePrice: "9900",
    minLinePrice: "16900",
    maxSalePrice: "10900",
    maxLinePrice: "16900",
    isSoldOut: false,
    groupIdList: [
      "15029",
      "15030",
      "14023",
      "127886731843219200",
      "127886732665303040",
      "127886733101511680",
      "127886733923595520",
      "14025",
      "127886726071855616",
      "14026",
      "127886727481142784",
      "127886731440566784"
    ],
    spuTagList: [
      {
        id: null,
        title: "\u8054\u540D\u7CFB\u5217",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135686624",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u7ECF\u5178\u767D"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "10003",
            specValue: "\u8282\u80FD\u5957\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "9900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 98,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135686625",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "11000",
            specValue: "\u8D35\u65CF\u9752"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11003",
            specValue: "\u7ECF\u5178\u5957\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "9900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135686626",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "11000",
            specValue: "\u7ECF\u5178\u767D"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11002",
            specValue: "\u5C0A\u4EAB\u793C\u76D2\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "9900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691622",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u7ECF\u5178\u767D"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11003",
            specValue: "S"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "9900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691623",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "10001",
            specValue: "\u7ECF\u5178\u767D"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "11002",
            specValue: "\u5C0A\u4EAB\u793C\u76D2\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "10900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135691624",
        skuImage: null,
        specInfo: [
          {
            specId: "10000",
            specTitle: null,
            specValueId: "11000",
            specValue: "\u8D35\u65CF\u9752"
          },
          {
            specId: "10002",
            specTitle: null,
            specValueId: "10003",
            specValue: "\u8282\u80FD\u5957\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "9900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "16900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    isAvailable: 1,
    spuStockQuantity: 598,
    soldNum: 102,
    isPutOnSale: 1,
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3d.png"
    ],
    specList: [
      {
        specId: "10000",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "10001",
            specId: "10000",
            saasId: "88888888",
            specValue: "\u7ECF\u5178\u767D",
            image: ""
          },
          {
            specValueId: "11000",
            specId: "10000",
            saasId: "88888888",
            specValue: "\u8D35\u65CF\u9752",
            image: ""
          }
        ]
      },
      {
        specId: "10002",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "11003",
            specId: "10002",
            saasId: "88888888",
            specValue: "\u7ECF\u5178\u5957\u88C5",
            image: ""
          },
          {
            specValueId: "10003",
            specId: "10002",
            saasId: "88888888",
            specValue: "\u8282\u80FD\u5957\u88C5",
            image: ""
          },
          {
            specValueId: "11002",
            specId: "10002",
            saasId: "88888888",
            specValue: "\u5C0A\u4EAB\u793C\u76D2\u88C5",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135681628",
    title: "\u5E26\u5E3D\u5348\u4F11\u6BEF\u864E\u5E74\u6B3E\u591A\u529F\u80FD\u52A0\u539A\u52A0\u5927\u52A0\u7ED2\u7B80\u7EA6\u591A\u529F\u80FD\u5348\u4F11\u6BEF\u8FDE\u5E3D\u62AB\u80A9",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a1.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3b.png"
    ],
    minSalePrice: "29900",
    minLinePrice: "39900",
    maxSalePrice: "39900",
    maxLinePrice: "39900",
    isSoldOut: false,
    groupIdList: [
      "14023",
      "127886732245873408",
      "127886733487386880",
      "14025",
      "127886726071855616",
      "14026",
      "127886728420666112",
      "127886728957538048",
      "127886729779621888",
      "127886730165497088",
      "127886730652037376",
      "127886731037912576",
      "127886731440566784",
      "127886729360190464",
      "15029",
      "15030"
    ],
    spuTagList: [
      {
        id: null,
        title: "\u9650\u65F6\u62A2\u8D2D",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135676629",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: "\u6D45\u7070\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862175246592",
            specValue: "S"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "29900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 80,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676630",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: "\u6D45\u7070\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904861755815680",
            specValue: "L"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "39900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 122,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681629",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: "\u6D45\u7070\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862007474176",
            specValue: "M"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "39900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "39900",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 119,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png"
    ],
    isAvailable: 1,
    spuStockQuantity: 321,
    soldNum: 102,
    isPutOnSale: 1,
    specList: [
      {
        specId: "127904180600844800",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "127904181322265856",
            specId: "127904180600844800",
            saasId: "88888888",
            specValue: "\u6D45\u7070\u8272",
            image: ""
          }
        ]
      },
      {
        specId: "127904861604820480",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "127904862175246592",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "S",
            image: ""
          },
          {
            specValueId: "127904862007474176",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "M",
            image: ""
          },
          {
            specValueId: "127904861755815680",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "L",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135681626",
    title: "\u8FF7\u4F60\u4FBF\u643A\u9AD8\u989C\u503C\u84DD\u7259\u65E0\u7EBF\u8033\u673A\u7ACB\u4F53\u58F0\u53EA\u80FD\u89E6\u63A7\u5F0F\u64CD\u4F5C\u7B80\u7EA6\u7ACB\u4F53\u58F0\u8033\u673A",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a1.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2b.png"
    ],
    minSalePrice: "29000",
    minLinePrice: "40000",
    maxSalePrice: "39000",
    maxLinePrice: "40000",
    isSoldOut: false,
    groupIdList: [
      "15029",
      "15030",
      "14023",
      "127886732245873408",
      "127886733487386880",
      "14025",
      "127886726071855616",
      "14026",
      "127886728420666112",
      "127886728957538048",
      "127886730652037376",
      "127886731037912576"
    ],
    spuTagList: [
      {
        id: null,
        title: "\u9650\u65F6\u62A2\u8D2D",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135676627",
        skuImage: null,
        specInfo: [
          {
            specId: "10006",
            specTitle: null,
            specValueId: "10007",
            specValue: "\u9ED1\u8272"
          },
          {
            specId: "11007",
            specTitle: null,
            specValueId: "10009",
            specValue: "\u7B80\u7EA6\u6B3E"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "29000",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "40000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 123,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676628",
        skuImage: null,
        specInfo: [
          {
            specId: "10006",
            specTitle: null,
            specValueId: "10007",
            specValue: "\u9ED1\u8272"
          },
          {
            specId: "11007",
            specTitle: null,
            specValueId: "10008",
            specValue: "\u793C\u76D2\u88C5"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "39000",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "40000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 123,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681627",
        skuImage: null,
        specInfo: [
          {
            specId: "10006",
            specTitle: null,
            specValueId: "10007",
            specValue: "\u9ED1\u8272"
          },
          {
            specId: "11007",
            specTitle: null,
            specValueId: "11008",
            specValue: "\u5E26\u5145\u7535\u7EBF\u7B80\u7EA6\u6B3E"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "39000",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "40000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 120,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2d.png"
    ],
    isAvailable: 1,
    spuStockQuantity: 366,
    soldNum: 102,
    isPutOnSale: 1,
    specList: [
      {
        specId: "10006",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "10007",
            specId: "10006",
            saasId: "88888888",
            specValue: "\u9ED1\u8272",
            image: ""
          }
        ]
      },
      {
        specId: "11007",
        title: "\u7C7B\u578B",
        specValueList: [
          {
            specValueId: "10009",
            specId: "11007",
            saasId: "88888888",
            specValue: "\u7B80\u7EA6\u6B3E",
            image: ""
          },
          {
            specValueId: "11008",
            specId: "11007",
            saasId: "88888888",
            specValue: "\u5E26\u5145\u7535\u7EBF\u7B80\u7EA6\u6B3E",
            image: ""
          },
          {
            specValueId: "10008",
            specId: "11007",
            saasId: "88888888",
            specValue: "\u793C\u76D2\u6B3E",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135681622",
    title: "\u7B80\u7EA6\u9910\u76D8\u8010\u70ED\u5BB6\u7528\u76D8\u5B50\u83DC\u76D8\u5957\u88C5\u591A\u989C\u8272\u7B80\u7EA6\u9910\u76D8\u8010\u70ED\u5BB6\u7528\u76D8\u5B50",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a2.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1b.png"
    ],
    minSalePrice: "129900",
    minLinePrice: "218000",
    maxSalePrice: "139900",
    maxLinePrice: "218000",
    isSoldOut: false,
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1d.png"
    ],
    groupIdList: [
      "14023",
      "127886732665303040",
      "127886733101511680",
      "127886733923595520",
      "14025",
      "127886726071855616",
      "14026",
      "127886728957538048",
      "127886727481142784",
      "127886729779621888",
      "127886730165497088",
      "127886730652037376",
      "127886731440566784",
      "127886729360190464",
      "15029",
      "15030"
    ],
    spuTagList: [
      {
        id: null,
        title: "\u638C\u67DC\u70ED\u5356",
        image: null
      }
    ],
    skuList: [
      {
        skuId: "135676623",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181506815488",
            specValue: "\u5976\u9EC4\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862175246592",
            specValue: "\u5355\u76D8"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "129900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "218000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 119,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676624",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181506815488",
            specValue: "\u5976\u9EC4\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904861755815680",
            specValue: "\u76D8+\u7897"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "139900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "218000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 116,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681623",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181506815488",
            specValue: "\u5976\u9EC4\u8272"
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862007474176",
            specValue: "\u5355\u76D8"
          }
        ],
        priceInfo: [
          {
            priceType: 1,
            price: "139900",
            priceTypeName: "\u9500\u552E\u4EF7\u683C"
          },
          {
            priceType: 2,
            price: "218000",
            priceTypeName: "\u5212\u7EBF\u4EF7\u683C"
          }
        ],
        stockInfo: {
          stockQuantity: 122,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: null,
        volume: null,
        profitPrice: null
      }
    ],
    isAvailable: 1,
    spuStockQuantity: 357,
    soldNum: 23102,
    isPutOnSale: 1,
    specList: [
      {
        specId: "127904180600844800",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "127904181506815488",
            specId: "127904180600844800",
            saasId: "88888888",
            specValue: "\u5976\u9EC4\u8272",
            image: ""
          }
        ]
      },
      {
        specId: "127904861604820480",
        title: "\u7C7B\u578B",
        specValueList: [
          {
            specValueId: "127904862175246592",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "\u5355\u76D8",
            image: ""
          },
          {
            specValueId: "127904862007474176",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "\u5355\u7897",
            image: ""
          },
          {
            specValueId: "127904861755815680",
            specId: "127904861604820480",
            saasId: "88888888",
            specValue: "\u76D8+\u7897",
            image: ""
          }
        ]
      }
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135681624",
    title: "\u4E0D\u9508\u94A2\u5200\u53C9\u52FA\u5957\u88C5\u5BB6\u7528\u897F\u9910\u9910\u5177ins\u7B80\u7EA6\u8010\u7528\u4E0D\u9508\u94A2\u91D1\u8272\u94F6\u8272\u53EF\u9009",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png",
    images: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a1.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png"
    ],
    video: null,
    available: 1,
    minSalePrice: "19900",
    minLinePrice: "19900",
    maxSalePrice: "29900",
    maxLinePrice: "29900",
    spuStockQuantity: 0,
    soldNum: 102,
    isPutOnSale: 1,
    categoryIds: [
      "127880527393854975",
      "127880527393854977",
      "127880526789875961"
    ],
    specList: [
      {
        specId: "127904180600844800",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "127904180768617216",
            specId: null,
            saasId: null,
            specValue: "\u5976\u9EC4\u8272",
            image: null
          }
        ]
      },
      {
        specId: "127904861604820480",
        title: "\u6570\u91CF",
        specValueList: [
          {
            specValueId: "127904862175246592",
            specId: null,
            saasId: null,
            specValue: "\u4E09\u4EF6\u5957",
            image: null
          },
          {
            specValueId: "127904862007474176",
            specId: null,
            saasId: null,
            specValue: "\u516D\u4EF6\u5957",
            image: null
          },
          {
            specValueId: "127904861755815680",
            specId: null,
            saasId: null,
            specValue: "\u516B\u4EF6\u5957",
            image: null
          }
        ]
      }
    ],
    skuList: [
      {
        skuId: "135676625",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862175246592",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "19900", priceTypeName: null },
          { priceType: 2, price: "29900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676626",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904861755815680",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29900", priceTypeName: null },
          { priceType: 2, price: "29900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681625",
        skuImage: null,
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904180768617216",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862007474176",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29900", priceTypeName: null },
          { priceType: 2, price: "29900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      }
    ],
    spuTagList: [{ id: "19011", title: "2020\u79CB\u5B63\u65B0\u6B3E", image: null }],
    spuLimitList: null,
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2d.png"
    ],
    etitle: ""
  },
  {
    saasId: "88888888",
    storeId: "1000",
    spuId: "135681628",
    title: "\u5E26\u5E3D\u5348\u4F11\u6BEF\u864E\u5E74\u6B3E\u591A\u529F\u80FD\u52A0\u539A\u52A0\u5927\u52A0\u7ED2\u7B80\u7EA6\u591A\u529F\u80FD\u5348\u4F11\u6BEF\u8FDE\u5E3D\u62AB\u80A9",
    primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
    images: ["https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png"],
    video: null,
    available: 1,
    minSalePrice: "29900",
    minLinePrice: "29900",
    maxSalePrice: "39900",
    maxLinePrice: "39900",
    spuStockQuantity: 321,
    soldNum: 103,
    isPutOnSale: 1,
    categoryIds: [
      "127880527393854975",
      "127880527393854977",
      "127880526789875961"
    ],
    specList: [
      {
        specId: "127904180600844800",
        title: "\u989C\u8272",
        specValueList: [
          {
            specValueId: "127904181322265856",
            specId: null,
            saasId: null,
            specValue: "\u6D45\u7070\u8272",
            image: null
          }
        ]
      },
      {
        specId: "127904861604820480",
        title: "\u5C3A\u7801",
        specValueList: [
          {
            specValueId: "127904862175246592",
            specId: null,
            saasId: null,
            specValue: "S",
            image: null
          },
          {
            specValueId: "127904862007474176",
            specId: null,
            saasId: null,
            specValue: "M",
            image: null
          },
          {
            specValueId: "127904861755815680",
            specId: null,
            saasId: null,
            specValue: "L",
            image: null
          }
        ]
      }
    ],
    skuList: [
      {
        skuId: "135676629",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862175246592",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "29900", priceTypeName: null },
          { priceType: 2, price: "39900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 80,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135676630",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904861755815680",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "39900", priceTypeName: null },
          { priceType: 2, price: "39900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 122,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      },
      {
        skuId: "135681629",
        skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
        specInfo: [
          {
            specId: "127904180600844800",
            specTitle: null,
            specValueId: "127904181322265856",
            specValue: null
          },
          {
            specId: "127904861604820480",
            specTitle: null,
            specValueId: "127904862007474176",
            specValue: null
          }
        ],
        priceInfo: [
          { priceType: 1, price: "39900", priceTypeName: null },
          { priceType: 2, price: "39900", priceTypeName: null }
        ],
        stockInfo: {
          stockQuantity: 119,
          safeStockQuantity: 0,
          soldQuantity: 0
        },
        weight: { value: null, unit: "KG" },
        volume: null,
        profitPrice: null
      }
    ],
    spuTagList: [{ id: "13001", title: "\u9650\u65F6\u62A2\u8D2D", image: null }],
    spuLimitList: null,
    desc: [
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png",
      "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png"
    ],
    etitle: ""
  }
];
function genGood(id, available = 1) {
  const specID = ["135681624", "135681628"];
  if (specID.indexOf(id) > -1) {
    return allGoods.filter((good) => good.spuId === id)[0];
  }
  const item = allGoods[id % allGoods.length];
  return __spreadProps(__spreadValues({}, item), {
    spuId: `${id}`,
    available,
    desc: (item == null ? void 0 : item.desc) || defaultDesc,
    images: (item == null ? void 0 : item.images) || [item == null ? void 0 : item.primaryImage]
  });
}


/***/ }),

/***/ "./model/goods.js":
/*!************************!*\
  !*** ./model/goods.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGoodsList": function() { return /* binding */ getGoodsList; },
/* harmony export */   "goodsList": function() { return /* binding */ goodsList; }
/* harmony export */ });
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./good */ "./model/good.js");


function getGoodsList(baseID = 0, length = 10) {
  return new Array(length).fill(0).map((_, idx) => (0,_good__WEBPACK_IMPORTED_MODULE_0__.genGood)(idx + baseID));
}
const goodsList = getGoodsList();


/***/ }),

/***/ "./model/swiper.js":
/*!*************************!*\
  !*** ./model/swiper.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genSwiperImageList": function() { return /* binding */ genSwiperImageList; }
/* harmony export */ });

const images = [
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png"
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": function() { return /* binding */ delay; }
/* harmony export */ });

function delay(ms = 200) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./services/good/fetchGoods.js":
/*!*************************************!*\
  !*** ./services/good/fetchGoods.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchGoodsList": function() { return /* binding */ fetchGoodsList; }
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");


function mockFetchGoodsList(pageIndex = 1, pageSize = 20) {
  const { delay } = __webpack_require__(/*! ../_utils/delay */ "./services/_utils/delay.js");
  const { getGoodsList } = __webpack_require__(/*! ../../model/goods */ "./model/goods.js");
  return delay().then(
    () => getGoodsList(pageIndex, pageSize).map((item) => {
      return {
        spuId: item.spuId,
        thumb: item.primaryImage,
        title: item.title,
        price: item.minSalePrice,
        originPrice: item.maxLinePrice,
        tags: item.spuTagList.map((tag) => tag.title)
      };
    })
  );
}
function fetchGoodsList(pageIndex = 1, pageSize = 20) {
  if (_config_index__WEBPACK_IMPORTED_MODULE_0__.config.useMock) {
    return mockFetchGoodsList(pageIndex, pageSize);
  }
  return new Promise((resolve) => {
    resolve("real api");
  });
}


/***/ }),

/***/ "./services/home/home.js":
/*!*******************************!*\
  !*** ./services/home/home.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchHome": function() { return /* binding */ fetchHome; }
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");


function mockFetchHome() {
  const { delay } = __webpack_require__(/*! ../_utils/delay */ "./services/_utils/delay.js");
  const { genSwiperImageList } = __webpack_require__(/*! ../../model/swiper */ "./model/swiper.js");
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: "\u7CBE\u9009\u63A8\u8350",
          key: 0
        },
        {
          text: "\u590F\u65E5\u9632\u6652",
          key: 1
        },
        {
          text: "\u4E8C\u80CE\u5927\u4F5C\u6218",
          key: 2
        },
        {
          text: "\u4EBA\u6C14\u699C",
          key: 3
        },
        {
          text: "\u597D\u8BC4\u699C",
          key: 4
        },
        {
          text: "RTX 30",
          key: 5
        },
        {
          text: "\u624B\u673A\u4E5F\u75AF\u72C2",
          key: 6
        }
      ],
      activityImg: `${_config_index__WEBPACK_IMPORTED_MODULE_0__.cdnBase}/activity/banner.png`
    };
  });
}
function fetchHome() {
  if (_config_index__WEBPACK_IMPORTED_MODULE_0__.config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve("real api");
  });
}


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
var __MOR_PAGE__ = (__webpack_require__(/*! @morjs/core */ "../node_modules/@morjs/core/esm/index.js").createPage);

var __MOR_API__ = (__webpack_require__(/*! @morjs/api */ "../node_modules/@morjs/api/esm/index.js").mor);



// import { checkWxSession} from 'services/usercenter/loginService';


__MOR_PAGE__({
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
    handleClick(e) {
        console.log("[zy]fab handleClick", e);
    },
    goodListPagination: {
        index: 0,
        num: 20,
    },
    privateData: {
        tabIndex: 0,
    },
    onShow() {
        var _a, _b;
        (_b = (_a = this === null || this === void 0 ? void 0 : this.getTabBar) === null || _a === void 0 ? void 0 : _a.call(this)) === null || _b === void 0 ? void 0 : _b.init();
    },
    onLoad() {
        this.init();
    },
    onReachBottom() {
        if (this.data.goodsListLoadStatus === 0) {
            this.loadGoodsList();
        }
    },
    onPullDownRefresh() {
        this.init();
    },
    init() {
        this.loadHomePage();
    },
    loadHomePage() {
        __MOR_API__.stopPullDownRefresh();
        this.setData({
            pageLoading: true,
        });
        (0,_services_home_home__WEBPACK_IMPORTED_MODULE_2__.fetchHome)().then(({ swiper, tabList }) => {
            this.setData({
                tabList,
                imgSrcs: swiper,
                pageLoading: false,
            });
            this.loadGoodsList(true);
        });
    },
    tabChangeHandle(e) {
        this.privateData.tabIndex = e.detail;
        this.loadGoodsList(true);
    },
    onReTry() {
        this.loadGoodsList();
    },
    loadGoodsList(fresh = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (fresh) {
                __MOR_API__.pageScrollTo({
                    scrollTop: 0,
                });
            }
            this.setData({ goodsListLoadStatus: 1 });
            const pageSize = this.goodListPagination.num;
            let pageIndex = this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
            if (fresh) {
                pageIndex = 0;
            }
            try {
                const nextList = yield (0,_services_good_fetchGoods__WEBPACK_IMPORTED_MODULE_1__.fetchGoodsList)(pageIndex, pageSize);
                this.setData({
                    goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
                    goodsListLoadStatus: 0,
                });
                this.goodListPagination.index = pageIndex;
                this.goodListPagination.num = pageSize;
            }
            catch (err) {
                this.setData({ goodsListLoadStatus: 3 });
            }
        });
    },
    goodListClickHandle(e) {
        const { index } = e.detail;
        const { spuId } = this.data.goodsList[index];
        __MOR_API__.navigateTo({
            url: `/pages/goods/details/index?spuId=${spuId}`,
        });
    },
    goodListAddCartHandle() {
        (0,tdesign_miniprogram_toast_index__WEBPACK_IMPORTED_MODULE_0__["default"])({
            context: this,
            selector: '#t-toast',
            message: '点击加入购物车',
        });
    },
    navToSearchPage() {
        __MOR_API__.navigateTo({ url: '/pages/goods/search/index' });
    },
    navToActivityDetail({ detail }) {
        const { index: promotionID = 0 } = detail || {};
        __MOR_API__.navigateTo({
            url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
        });
    },
}, "w");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["mor.v","mor.c"], function() { return __webpack_exec__("./pages/home/home.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=home.js.map