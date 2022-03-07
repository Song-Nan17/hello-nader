<template>
	<view class="content">
		<view class="swiper-wrap">
			<swiper class="swiper" circular :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay"
				:interval="swiper.interval" :duration="swiper.duration">
				<swiper-item class="swiper-item" v-for="(image, index) in swiper.images" :key="index">
					<image class="swiper-img" :src="image" mode="aspectFill"/>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '良信',
				swiper: {
					images: ["/static/swiper-01.png", "/static/swiper-02.png", "/static/swiper-03.png",
						"/static/swiper-04.png"
					],
					background: ['color1', 'color2', 'color3'],
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.swiper-wrap {
		width: 100%;
	}

	.swiper {
		width: inherit;
		height: 263rpx;
	}

	.swiper-item {
		display: block;
		text-align: center;
	}
	
	.swiper-img {
		width: 100%;
		height: 263rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
