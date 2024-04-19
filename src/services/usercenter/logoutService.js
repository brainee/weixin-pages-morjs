import { logout,} from '../../model/usercenter/sessionModel';

export function logoutService(params){
  let prefix="[zy]logoutService";
  console.log(prefix,"service start",params);
  return logout(params).then((data)=>{
    console.log(prefix,"resp=",data);

    if(data?.flag){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      return true;
    }else if(data?.errorMsg){
      wx.showToast({
        title: data?.errorMsg,
      })
    }else{
      wx.showToast({
        title: "登出失败",
      })
    }
  
  });
}