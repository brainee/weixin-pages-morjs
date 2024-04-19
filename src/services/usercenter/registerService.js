import { register,trial,} from '../../model/usercenter/sessionModel';
import { phoneSession,} from '../../model/usercenter/sessionModel';


export function registerService(params){
  let prefix="[zy]registerService";
  console.log(prefix,"service start",params);
  return register(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data?.success){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      return true;
    }else if(data?.errorMessage){
      wx.showToast({
        title: data?.errorMessage,
      })
    }else{
      wx.showToast({title:"注册失败"})
    }
  
  });
}

export function trialService(params){
  let prefix="[zy]trialService";
  console.log(prefix,"service start",params);
  return trial(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      return data;
    }
  
  });
}

export function getPhoneService(params){
  let prefix="[zy]getPhoneService";
  console.log(prefix,"service start",params);
  return phoneSession(params).then((data)=>{
    // console.log(prefix,"service got",data);

    // if(data){
    //   let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
    //   return data;
    // }
    return data?.mobile;
  });
}