import Swiper from 'swiper'
import axios from 'axios'
import './index.scss'
import './lib/zepto/zepto'
import './lib/zepto/event'
import './lib/zepto/touch'
import './lib/zepto/fx'
import './lib/zepto/fx_methods'
let swiper = new Swiper('.swiper-container', {
	direction: 'vertical'
})

$('.loading').click(function() {
	$(this).fadeOut()
})
$('.welcome').click(function() {
	$(this).fadeOut()
})

// axios.get('http://api.yyeexin.com/weChat/getAccessToken').then(({ data }) => {
// 	console.log(data)
// })

// axios
// 	.post('http://api.yyeexin.com/weChat/getJSSDKConfig', {
// 		url: window.location.href
// 	})
// 	.then(({ data }) => {
// 		const { appId, nonceStr, signature, timestamp } = data
// 		wx.config({
// 			debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
// 			appId, // 必填，公众号的唯一标识
// 			timestamp, // 必填，生成签名的时间戳
// 			nonceStr, // 必填，生成签名的随机串
// 			signature, // 必填，签名
// 			jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
// 		})
// 	})
