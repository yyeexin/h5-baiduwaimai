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

			if (this.activeIndex === 2) {
				$('.swiper-slide')
					.eq(2)
					.addClass('swiper-no-swiping')
				$('.swiper-slide')
					.eq(2)
					.children('.bear')
					.css('animation', 'bearDown 0.5s 0.5s forwards')
			}
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

$('.swiper-slide')
	.eq(2)
	.click(function() {
		$(this).removeClass('swiper-no-swiping')

		$('.swiper-slide')
			.eq(2)
			.children('.bear')
			.css('animation', 'none')

		var index = 0
		var timer = setInterval(() => {
			$('.animate-bear-box div').css('opacity', 0)
			$('.animate-bear-box div')
				.eq(index)
				.css('opacity', 1)
			index++
		}, 1000)
		setTimeout(() => {
			clearInterval(timer)
		}, 4000)
	})
