import Swiper from 'swiper'
import './css/index.scss'
import './lib/zepto/zepto'
import './lib/zepto/event'
import './lib/zepto/touch'
import './lib/zepto/fx'
import './lib/zepto/fx_methods'
var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	on: {
		slideChange: function() {
			$('.swiper-slide')
				.eq(this.activeIndex)
				.addClass('animate')
				.siblings()
				.removeClass('animate')
		}
	}
})

$('.loading').addClass('animate')
$('.loading .step').on('animationend', function() {
	$('.loading').fadeOut(100, function() {
		$('.welcome').addClass('animate')
	})
})

$('.welcome .rotate-btn-box').longTap(function() {
	$('.bear-box').css('animation', 'bearDisappear 1s forwards')
	setTimeout(() => {
		$('.welcome').fadeOut(1000, function() {
			$('.page1').addClass('animate')
		})
	}, 1000)
})
