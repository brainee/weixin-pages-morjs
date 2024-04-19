import { request } from '../../utils/request';
import {domain} from '../../config/index';

const findAirlinesUrl=domain+`/api/findAirlines`;

export function findAirlines(params){
  let prefix="[zy]findAirlines model";
  let url=findAirlinesUrl;
  console.log(prefix,"request start",url);
  return request({
    url:url,
    data:params,
    method:"POST",
  }).then((e)=>{
    console.log(prefix,"request success",e);
    return e;
  }).catch(e=>{
    console.log(prefix,"request fail",e);
  });
  
}

