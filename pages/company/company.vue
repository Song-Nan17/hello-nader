<template>
	<view class="container">
		<view class="swiper-wrap">
			<swiper class="swiper" circular :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay"
				:interval="swiper.interval" :duration="swiper.duration">
				<swiper-item class="swiper-item" v-for="(image, index) in swiper.images" :key="index">
					<image class="swiper-img" :src="image" mode="aspectFill" />
				</swiper-item>
			</swiper>
		</view>
		<u-section title="产品" type="line">
			<uni-card v-for="(product,index) in products" :title="product.name" :thumbnail="product.img"
				:key="index" @click="onClick">
				<text class="product-desc">{{product.desc}}</text>
			</uni-card>
		</u-section>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: '良信',
				avatar: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/1-1-667.jpg',
				swiper: {
					images: ["/static/swiper-01.png", "/static/swiper-02.png", "/static/swiper-03.png",
						"/static/swiper-04.png"
					],
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
				products: [{
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/1-1-667.jpg',
					name: 'NDW1A系列框架断路器',
					desc: 'NDW1A系列万能式断路器,适用于交流50Hz/60Hz，额定电流200A～6300A、额定绝缘电压1000V/1250V、额定工作电压为AC220V/230V/240V、AC380V/400V/415V、AC440V/480V、AC660V/690V的配电网络中，用来分配电能和保护线路及电源设备免受过载、欠电压、短路、单相接地等故障的危害,同时也可以作为隔离开关使用。断路器具有多种保护功能，在做到高精确的选择性保护的同时，还可避免不必要的突然停电，提高了供电系统可靠性、安全性。'
				}, {
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/3-843.png',
					name: 'NDB1系列断路器',
					desc: 'NDB1-32/40/63/125 系列断路器适用于工业、民用建筑、能源、通信及基础建设等领域低压终端配电系统。具有短路保护、过载保护、控制、隔离等功能。'
				}, {
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/NDB5-zhengmian6311760.png',
					name: 'NDB5设备用断路器',
					desc: 'NDB5设备用断路器适用于额定电流0.5A至63A，多极并联至150A。   额定电压为AC230/400V、AC250V、AC480/277V（50/60Hz）或DC80V及以下的电力系统中。产品可做过载，短路保护之用，亦可用做不频繁的接触和分断。广泛用于计算机及其外围设备、工业自动化系统、电讯设备、通用电源系统、UPS不间断电源设备、铁路机车、船用电气系统、航空航天、电梯控制系统和移动电源设备中。'
				}, {
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/1-1-945.jpg',
					name: 'NDQ1系列自动转换开关',
					desc: 'NDQ1系列自动转换开关电器适用于工作电压至AC400V/415V、50Hz，额定电流10A至800A的两路电源之间切换，执行元件为塑壳断路器。本产品适用于医院、商场、银行、宾馆和消防等不允许断电的重要负载。'
				}, {
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/1-1-196.jpg',
					name: 'NDG3系列隔离开关',
					desc: 'NDG3系列隔离开关适用于交流50/60Hz,额定工作电压为AC380V、AC690V、AC1000V或DC1000V等， 额定电流为1250A及以下的电力系统中，产品可用作不频繁的接通和分断，起到隔离分断线路的作用，可广泛应用于建筑、电信、冶金等行业，并针对目前太阳能光伏系统中直流分断问题的解决具有出色的表现。'
				}, {
					img: 'https://www.sh-liangxin.com/Public/Uploads/uploadfile/images/20210222/1-1-78.jpg',
					name: 'NDC2系列交流接触器',
					desc: 'NDC2系列交流接触器（以下简称接触器），主要用于交流50Hz（或60Hz）、额定电压至1000V，在AC-3使用类别下，额定工作电压为415V时主回路额定工作电流至170A的电力系统中，供接通与分断电路及频繁起动、控制交流电动机；并可与适当的热过载继电器组成电磁起动器，以保护可能发生过负荷的电路。'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			onClick(e) {
				console.log(e)
			},
		}
	}
</script>

<style>
	.container {
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

	.product-desc {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
</style>
