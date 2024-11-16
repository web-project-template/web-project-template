import {getWechatConfig} from '../api'

let link = window.location.href

let shareConfig = {
  title: '小南瓜酱正在参加"赢书挑战"，喊你一起来',
  desc: '限量1000本《哈利·波特与魔法石》精美图书，先到先得哦～',
  timeLineTitle: '小南瓜酱正在参加"赢书挑战"，喊你一起来',
  link: link, // 分享链接参数需要编码，参数中带有空格调用分享失败！！
  shareImg: 'https://media.vipkidstatic.com/homework/res/r_15483307710091548330771011.png',
  shareAppMessageSuccessFun: null,
  shareTimelineSuccessFun: null
}

getWechatConfig({
  url: document.location.href
}).then(d => {
  window['wx'].config({
    debug: false,
    appId: d.data.appId,
    timestamp: d.data.timestamp,
    nonceStr: d.data.nonceStr,
    signature: d.data.signature,
    jsApiList: [
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'translateVoice',
      'startRecord',
      'stopRecord',
      'onRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ]
  })

  window['wx'].ready(function () {
    wxShare()
  })
})

function wxShare () {
  console.log(shareConfig)
  // 分享给朋友
  window['wx'].onMenuShareAppMessage({
    title: shareConfig.title, // 分享标题
    desc: shareConfig.desc, // 分享描述
    link: shareConfig.link, // 分享链接
    imgUrl: shareConfig.shareImg, // 分享图标
    trigger: function (res) {
      // alert('用户点击发送给朋友');
    },
    success: function (res) {
      // alert('已分享');
      if (shareConfig.shareAppMessageSuccessFun) shareConfig.shareAppMessageSuccessFun()
    },
    cancel: function (res) {
      // alert('已取消');
    },
    fail: function (res) {
      // alert(JSON.stringify(res));
    }
  })

  // 分享到朋友圈
  window['wx'].onMenuShareTimeline({
    title: (shareConfig.timeLineTitle || shareConfig.title), // 分享标题
    link: shareConfig.link, // 分享链接
    imgUrl: shareConfig.shareImg, // 分享图标
    success: function () {
      // alert('已分享');
      if (shareConfig.shareTimelineSuccessFun) shareConfig.shareTimelineSuccessFun()
    },
    cancel: function () { // 用户取消分享后执行的回调函数
      // alert('已取消');
    }
  })
}

export {
  link,
  shareConfig,
  wxShare
}
