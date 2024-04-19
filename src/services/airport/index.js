import { searchArea} from '../../model/airport/index';

export function searchAreaService(params){
  let prefix="[zy]searchAreaService";
  console.log(prefix,"service start",params);
  return searchArea(params).then((res)=>{
    // console.log(prefix,"service got",res);

    if(res?.data){
      return res.data;
    }
  });
}

