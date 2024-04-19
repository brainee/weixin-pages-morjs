import { findAirlines} from '../../model/airline/index';

export function findAirlinesService(params){
  let prefix="[zy]findAirlinesService";
  console.log(prefix,"service start",params);
  return findAirlines(params).then((res)=>{
    console.log(prefix,"service got",res);

    if(res.data){
      return res.data.map(airline=>{
        return {label:airline.airlinesName,value:airline.airlinesCode};
      });
    }
  });
}

