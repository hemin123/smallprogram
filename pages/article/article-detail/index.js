
var { articles } = require('../../../data/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

      
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.articleId;
    console.log(articleId);
    var article = articles[articleId];
    console.log(article);
    this.setData(article);
  },

  tapCollection:function(){


  },
  tapShare:function(){
    var itemList=['hhh','qq'];
    wx.showActionSheet({
      itemList: itemList,
      success:function(res){
        wx.showToast({
          title: 'hh5595h',
          icon: '',
          image: '',
          duration: 0,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    })
  },

  tapMusic:function(){
    var backgroundAudioManager = wx.getBackgroundAudioManager()


    console.log(articles);
    var isPlayingMusic = !! this.data.isPlayingMusic;
    console.log(isPlayingMusic);
    if (isPlayingMusic){
      // backgroundAudioManager.pause();
      backgroundAudioManager.pause()
      this.setData({
        isPlayingMusic:false
      })

    }else{
      
      backgroundAudioManager.title = '此时此刻'
      backgroundAudioManager.epname = '此时此刻'
      backgroundAudioManager.singer = '许巍'
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
      backgroundAudioManager.play();
      this.setData({
        isPlayingMusic: true
      })

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})