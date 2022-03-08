<template>
	<view>
		<web-view :src="src" :webview-styles="webviewStyles">前往良信电器官网</web-view>
	</view>
</template>

<script>
	const DEFAULT_SRC = 'https://www.sh-liangxin.com/'
	export default {
		data() {
			return {
				src: DEFAULT_SRC,
				webviewStyles: {
					progress: {
						color: '#7dcdeb'
					}
				}
			}
		},
		onLoad(option) {
			this.src = option.to || DEFAULT_SRC
			console.log('song', option)
		}
	}
</script>

<style>
</style>
