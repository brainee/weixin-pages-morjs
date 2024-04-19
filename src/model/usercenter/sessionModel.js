import { request } from '../../utils/request';
import {domain} from '../../config/index';

const loginUrlOfPhone=domain+`/wx/ma/user/phone?code=`;
const loginUrlOfWx=domain+`/wx/ma/user/login?`;
const logoutUrlOfWx=domain+`/wx/ma/user/logout?`;
const loginUrlOfPass=domain+`/wx/ma/user/loginWithPass?`;
const loginUrlOfSms=domain+`/wx/ma/user/loginWithSms?`;
const sendSmsCodeUrl=domain+`/wx/ma/user/sms?`;
const validateSmsCodeUrl=domain+`/wx/ma/user/validateSms?`;
const resetPassUrl=domain+`/wx/ma/user/resetPassword?`;
const registerUrl=domain+`/wx/ma/user/register?`;
const trialUrl=domain+`/wx/ma/user/trial?`;

export function wxSession(params){
  let prefix="[zy]wxSession model";
  let url=loginUrlOfWx;
  console.time(prefix,url);
  return request({
    url:url,
    data:params,
  }).then((e)=>{
    let {openid,unionid}=e||{};
    console.log(prefix,"request success",openid,unionid);
    return e;
  }).catch(e=>{
    console.log(prefix,"request fail",e);
  })
  .finally(()=>{
    console.timeEnd(prefix);
  })
}

export function accountSession(params){
  let prefix="[zy]accountSession model";
  let url=loginUrlOfPass;
  console.time(prefix,"request start",url);
  return request({
    url:url,
    data:params,
  }).then((e)=>{
    let {openid,unionid,loginResponse}=e;
    console.timeEnd(prefix,"request success",openid,unionid,e);
    return e;
  }).catch(e=>{
    console.timeEnd(prefix,"request fail",e);
  });
}

export function smsSession(params){
  let prefix="[zy]smsSession model";
  let url=loginUrlOfSms;
  console.time(prefix,"start smsSession request",url);
  return request({
    url:url,
    data:params,
    method:"POST",
  }).then((e)=>{
    let {openid,unionid,loginResponse}=e;
    console.timeEnd(prefix,"request success",openid,unionid);
    return e;
  }).catch(e=>{
    console.timeEnd(prefix,"request fail",e);
  });
}

export function phoneSession(params){
  let prefix="[zy]phoneSession";
  let url=loginUrlOfPhone+params.code;
  console.log(prefix,"request start",url);
  return request({
    url:url,
    data:params,
  }).then((e)=>{
    console.log(prefix,"request success",e);
    return e;
  }).catch(e=>{
    console.log(prefix,"request fail",e);
  });
}

export function sendSmsCode(params){
  let prefix="[zy]sendSmsCode model";
  let url=sendSmsCodeUrl;
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
export function validateSmsCode(params){
  let prefix="[zy]validateSmsCode model";
  let url=validateSmsCodeUrl;
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

export function resetPassword(params){
  let prefix="[zy]resetPassword model";
  let url=resetPassUrl;
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

export function register(params){
  let prefix="[zy]register model";
  let url=registerUrl;
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

export function trial(params){
  let prefix="[zy]trial model";
  let url=trialUrl;
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

export function logout(params){
  let prefix="[zy]logout model";
  let url=logoutUrlOfWx;
  console.log(prefix,"request start",url);
  return request({
    url:url,
    data:params,
  }).then((e)=>{
    console.log(prefix,"request success",e);
    return e;
  }).catch(e=>{
    console.log(prefix,"request fail",e);
  });
  
}
