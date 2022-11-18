// pages/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name:'',
    address_1:'',
    address_2:'',
    address_3:'',
    address_4:'',
    address_5:'',
    contact_1:'',
    contact_2:'',
    contact_3:''
  },

  sync_input(e){
    var id=e.currentTarget.id;
    switch(id){
      case 'user_name':
        this.setData({user_name: e.detail.value});
        break;
      case 'contact_1':
        this.setData({contact_1: e.detail.value});
        break;        
      case 'contact_2':
        this.setData({contact_2: e.detail.value});
        break;
      case 'contact_3':
          this.setData({contact_3: e.detail.value});
          break
      case 'address_1':
        this.setData({address_1: e.detail.value});
        break;
      case 'address_2':
        this.setData({address_2: e.detail.value});
        break;
      case 'address_3':
        this.setData({address_3: e.detail.value});
        break;
      case 'address_4':
        this.setData({address_4: e.detail.value});
        break;
      case 'address_5':
        this.setData({address_5: e.detail.value});
        break;
      default:
        console.log('symc input err')
    }
    
  },

 

  update_info(){
    console.log(this.data.user_name);
    if(this.data.user_name == '')
    {
      wx.showModal({
        title: '用户名不能为空',
        content: '',
        complete: (res) => {
          if (res.cancel) {}
          if (res.confirm) {}
        }
      })
    }
    else{
      wx.cloud.database().collection('account').where({iid:'admin'}).update({
        data:{
          user_name:this.data.user_name,
          contact_1:this.data.contact_1,
          contact_2:this.data.contact_2,
          contact_3:this.data.contact_3,
          address_1:this.data.address_1,
          address_2:this.data.address_2,
          address_3:this.data.address_3,
          address_4:this.data.address_4,
          address_5:this.data.address_5
        }
        });
        let pages = getCurrentPages();
        let beforepage = pages[pages.length-2];
        wx.navigateBack({
          detail:1,
          success:()=>{beforepage.onLoad()}
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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