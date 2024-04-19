import { resetPassword,} from '../../model/usercenter/sessionModel';


export function resetPasswordService(params){
  let prefix="[zy]resetPasswordService";
  console.log(prefix,"service start",params);
  return resetPassword(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data?.success){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      return true;
    }else if(data?.errorMessage){
      wx.showToast({
        title: data?.errorMessage,
      })
    }else{
      wx.showToast({
        title: "重置失败",
      })
    }
  
  });
}