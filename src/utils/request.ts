import {promisify} from './promisify';

export const request=(options:WechatMiniprogram.RequestOption&{caller:string})=>{
  let prefix="[zy]request";
  let {caller,...optionForWx}=options;
  let url=options.url;
  console.time(prefix);
  return promisify(wx.request)(optionForWx)
  .then((e:any)=>{
    let data=e?.data;
    console.timeLog?.(prefix,"got success,response=",url,caller,options.data);//e
    if(e.statusCode===200){
      return e.data;
    }else{
      wx.showToast({title:e.errMsg});
    }
  })
  .catch((e)=>{
    wx.showToast({title:e.message+e.stack});
    console.timeLog?.(prefix,"got fail error=",url,caller,options.data,e);
  })
  .finally(()=>{
    console.timeEnd(prefix);
  })
};