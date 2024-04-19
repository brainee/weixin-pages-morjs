

export function promisify(api:Function) {
  let prefix="[zy]promisify";
  return (opt:WechatMiniprogram.RequestOption, ...arg:any[]) => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, opt, { success: resolve, fail: reject }), ...arg);
    }).then((e)=>{
      let name=api.name,url=opt.url;
      // console.log(prefix,name,url);
      return e;
    });
  }
}