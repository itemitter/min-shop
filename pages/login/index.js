// pages/login/index.js
import {requestProfile} from '../../utils/asyncWx.js'

import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  async handleGetProfile(e){
   const {userInfo} = await  requestProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
   })
   this.setData({
        userInfo: userInfo,
        hasUserInfo: true
    })
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1
    });

    // const {userInfo}=e.detail;
    // wx.setStorageSync("userinfo", userInfo);
    // wx.navigateBack({
    //   delta: 1
    // });
      
  }
})