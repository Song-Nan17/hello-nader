<template>
	<view class="about">
		<view class="content">
			<image class="logo" src="https://www.sh-liangxin.com/Public/Cn/picture/logo.svg" mode="aspectFit" />
			<text>Nader良信成立于1999年，定位于“智能化高端低压电气系统解决方案专家”
				，专注终端电器、配电电器、控制电器、智能家居等领域的研发、生产、销售和服务，产品及解决方案广泛应用于从发电端、输配电到用电端各场景，公司业务覆盖信息通讯、新能源、建筑地产、电网、发电、工控、工业建筑等9大行业，30多个细分行业。</text>
		</view>
		<button type="primary" class="official-website-btn" @click="goToOfficialWebsite">前往良信电器官网</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {
			goToOfficialWebsite() {
				uni.navigateTo({
					url: '/pages/web-review/web-view?to=https://www.sh-liangxin.com/'
				});
			}
		}

	}
</script>

<style>
	page,
	view {
		display: flex;
	}

	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.about {
		flex: 1;
		flex-direction: column;
		padding: 30rpx;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
	}

	.content {
		align-items: center;
		flex-direction: column;
	}

	.logo {
		height: 100rpx;
		margin-bottom: 80rpx;
	}

	.official-website-btn {
		width: 100%;
		margin: 80rpx auto;
	}
</style>
