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
			}
			if (swiper.previousIndex == 2) {
				$('.swiper-slide')
					.eq(2)
					.find('.bear')
					.attr('style', '')
				$('.animation-bear-box div').attr('style', '')
				$('.normal-card').attr('style', '')
				$('.hit-card-box div').attr('style', '')
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
		$('.swiper-slide')
			.eq(2)
			.children('.bear')
			.css('animation', 'none')

		var index = 0
		var timer = setInterval(() => {
			$('.animate-bear-box div').css('opacity', 0)
			$('.normal-card div')
				.eq(index)
				.css('animation', 'none')
			$('.animate-bear-box div')
				.eq(index)
				.css('opacity', 1)

			$('.hit-card-box div')
				.eq(index)
				.css('opacity', 1)

			if (index === 2) {
				clearInterval(timer)
				$('.hit-card-box div').css('animation', 'bearDisappear 1s forwards')
				setTimeout(function() {
					$('.swiper-slide')
						.eq(2)
						.removeClass('swiper-no-swiping')
				}, 1000)
			}
			index++
		}, 1000)
	})
var audioDom = document.querySelector('audio')
$('.audioControl').click(function() {
	if (audioDom.paused) {
		audioDom.play()
		$(this)
			.removeClass('pause')
			.addClass('play')
	} else {
		audioDom.pause()
		$(this)
			.removeClass('play')
			.addClass('pause')
	}
})
