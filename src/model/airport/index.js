import { request } from '../../utils/request';
import {domain,config,areaData} from '../../config/index';

const searchAreaUrl=domain+`/api/searchArea`;

export function searchArea(params){
  let prefix="[zy]searchArea model";
  let url=searchAreaUrl;
  console.log(prefix,"request start",url);
  return request({
    url:url,
    data:params,
    method:"POST",
  }).then((e)=>{
    console.log(prefix,"request success",e);
    // if(config.useMock){
    //   return areaData;
    // }
    return e;
  }).catch(e=>{
    console.log(prefix,"request fail",e);
  });
}

