import { wxSession,accountSession,phoneSession,} from '../../model/usercenter/sessionModel';
import {restartMiniProgram} from "../../utils/restartMiniProgram"
import {config} from '../../config/index'

export function getWxSession(params){
  let prefix="[zy]getWxSession"
  console.time(prefix,"start getWxSession request");
  return wxSession(params).then((data)=>{
    if(data){
      let {openid,sessionKey,unionid}=data;
      getApp().globalData.session=data;
    }
    console.timeEnd(prefix,"resp=",data);
    return data;
  });
}

export function wxLogin(){
  try {
    let prefix="[zy]wxLogin";
    console.time(prefix);
    wx.login({
      success: res => {
        let {code}=res;
        console.log(prefix,"wx.login,code=" + code,res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        getWxSession({code}).then(session=>{
          console.timeEnd(prefix,"session",session);
          if(session){
            wx.showToast({
              title: '成功获取微信登录态',
            });
            wx.setStorageSync('session_key', session)
          }else{
            wx.showModal({
              title: '获取登录态失败1',
              content: '获取登录态失败，请退出重试。',
              showCancel:false
            })
            .then(e=>{
              // restartMiniProgram({
              //   path:"/pages/index/index",
              // })
              // .then(e=>{console.log(prefix,"success",e)})
              // .catch(e=>{console.log(prefix,"fail",e)})
  
            });
          }
          
        })
      },
      fail:e => {
        console.timeEnd(prefix);
        console.log(prefix,"wx.login fail, errMsg=",e.errMsg);

        wx.showModal({
          title: '登录失败2',
          content: '登录失败，请退出重试。',
          showCancel:false
        })
        .then(e=>{
          restartMiniProgram({
            path:"/pages/index/index",
          })
          .then(e=>{console.log(prefix,"success",e)})
          .catch(e=>{console.log(prefix,"fail",e)})
        });
      }
    });
  } catch (error) {
    console.timeEnd(prefix,"wx.login error, errMsg=",error);
    wx.showModal({
      title: '登录异常3',
      content: '登录异常，请退出重试。',
      showCancel:false
    })
    .then(e=>{
      restartMiniProgram({
        path:"/pages/index/index",
      })
      .then(e=>{console.log(prefix,"success",e)})
      .catch(e=>{console.log(prefix,"fail",e)})

    // wx.exitMiniProgram()
    // .then(e=>{console.log(prefix,"success",e)})
    // .catch(e=>{console.log(prefix,"fail",e)})
    });
  }
}

export function checkWxSession(){
  let prefix="[zy]checkSession";
  wx.checkSession({
    success (e) {
      //session_key 未过期，并且在本生命周期一直有效
      let app=getApp();
      console.log(prefix,"checkSession session_key 未过期",e,JSON.stringify(app.globalData));
      let session=wx.getStorageSync('session_key');
      console.log(prefix,"recover session=",session);
      if(!(app.globalData?.session?.openid)&&!(session?.openid)){
        // session不存在，重新登录
        wx.showToast({
          title: 'openid不存在',
        })
        wxLogin();
      }else if(session?.openid){
        app.globalData.session=session;
      }
    },
    fail (e) {
      console.log(prefix,"checkSession session_key 已经失效，需要重新执行登录流程",e);
      // wx.login() //重新登录
      wx.showToast({title:prefix+"session_key 已经失效"});
      wxLogin();

    }
  })

}


export function getAccountSession(params){
  let prefix="[zy]getAccountSession";
  console.log(prefix,"service start");
  return accountSession(params).then((data)=>{
    // console.log(prefix,"service got",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      if(data?.loginResponse?.flag){
        getApp().globalData.session=data;
      }
      // wx.showToast({
      //   title: data?.loginResponse?.errorMsg||"登录失败",
      // })
      return data;
    }
  });
}



export function phoneLoginService(params){
  let prefix="[zy]phoneLoginService";
  console.log(prefix,"service start",params);
  return phoneSession(params).then((data)=>{
    // console.log(prefix,"service got",data);

    if(data){
      // let {mobile,openid,unionid,loginResponse:{flag,token,uid,errorMsg,}}=data;
      if(data?.loginResponse?.flag){
        getApp().globalData.session=data;
        return true;
      }else{
        wx.showModal({
          title: '登录失败',
          content: data?.loginResponse?.errorMsg,
          confirmText: '去注册',
          complete: (res) => {
            if (res.cancel) {
            }
        
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/usercenter/register/account/index',
              });
            }
          }
        });
      }
      // return data;
    }

  });
}


export function checkAccountSession(){
  let session=getApp().globalData?.session;
  console.log("[zy]checkAccountSession session",session);
  // let {mobile,openid,unionid,loginResponse:{flag,token,uid}}=session;
  return !!session?.loginResponse?.flag;
}

export function getLocalAccountSession(){
  let session=getApp().globalData?.session;
  return session;
}



