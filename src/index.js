import Swiper from 'swiper'
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
