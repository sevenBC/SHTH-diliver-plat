// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name:'',
    address_1:"Null",
    address_2:"Null",
    address_3:"Null",
    address_4:"Null",
    address_5:"Null",
    contact_1:"我不好说",
    contact_2:"你猜猜",
    contact_3:"不告诉你"
  },

  get_name(){
    wx.cloud.database().collection('account').where({iid:'admin'}).get().then(
      res=>{
        console.log("success",res.data[0].user_name);
        user_name: res.data[0].user_name
      }
    )
  },

  click_box(){
    wx.navigateTo({
      url: '/pages/info/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.cloud.database().collection('account').where({iid:'admin'}).get().then(
      res=>{
        console.log("success",res.data[0].user_name);
        this.setData({
          user_name: res.data[0].user_name,
          contact_1: res.data[0].contact_1,
          contact_2: res.data[0].contact_2,
          contact_3: res.data[0].contact_3,
          address_1: res.data[0].address_1,
          address_2: res.data[0].address_2,
          address_3: res.data[0].address_3,
          address_4: res.data[0].address_4,
          address_5: res.data[0].address_5,
        })
      }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})