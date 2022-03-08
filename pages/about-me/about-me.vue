<template>
	<view class="container">
		<u-section title="自我评价" type="line">
			<uni-list :border="false">
				<uni-list-item :border="false" v-for="(selfAssessment,index) in selfAssessments" :show-extra-icon="true"
					:extra-icon="extraIcon" :title="selfAssessment" :key="index" />
			</uni-list>
		</u-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '宋楠',
				extraIcon: {
					color: '#707070',
					size: '22',
					type: 'forward',
				},
				selfAssessments: ['学习能力强，能根据工作需要快速学习各种技术语言，了解项目业务上下文，快速投入到新项目的生产中',
					'责任心强、工作细致、认真、严谨，善于沟通与协调团队，做事踏实、有耐心，能够理解并服从安排',
					'对技术有浓厚兴趣，喜欢并不断学习新技术',
					'代码习惯好，注重clean code和code refactor'
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
</style>
