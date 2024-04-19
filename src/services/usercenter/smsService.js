import { smsSession,sendSmsCode,validateSmsCode} from '../../model/usercenter/sessionModel';

export function getSmsSession(params){
  let prefix="[zy]getSmsSession";
  console.log(prefix,"service start");
  return smsSession(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      if(data?.loginResponse?.flag){
        getApp().globalData.session=data;
      }
      return data;
    }
  });
}

export function sendSmsCodeService(params){
  let prefix="[zy]sendSmsCodeService";
  console.log(prefix,"service start",params);
  return sendSmsCode(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      return data;
    }
  
  });
}

export function validateSmsService(params){
  let prefix="[zy]validateSmsService";
  console.log(prefix,"service start");
  return validateSmsCode(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;

      return data;
    }
  });
}