<template>
	<view class="container">
		<u-section title="自我评价" type="line">
			<uni-list :border="false">
				<uni-list-item :border="false" v-for="(selfAssessment,index) in selfAssessments" :show-extra-icon="true"
					:extra-icon="extraIcon" :title="selfAssessment" :key="index" />
			</uni-list>
		</u-section>

		<u-section title="项目经历" type="line">
			<uni-collapse>
				<uni-collapse-item v-for="(project,index) in projects" :key="index" :show-animation="true"
					:title="project.name">
					<view class="project-content">
						<text class="project-detail">{{project.detail}}</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
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
				],
				projects: [{
					name: '● TWU',
					detail: '为期两月的集中培训，快速学习Javascript、React、Redux、Java、SpringBoot等前后端技术基本知识以及单元测试，了解敏捷开发基本流程，进行模拟项目。'
				}, {
					name: '● 戴姆勒OTR售后',
					detail: 'OTR是服务于梅赛德斯-奔驰大中华区各销售代表和门店的一站式移动工具，是戴姆勒中国数字化转型的重点之一。OTR移动端与网页端相配合，涵盖了从潜在客户管理、报价与订单管理到数字化车辆交付的整个销售过程。本人在项目上主要负责理解和响应项目需求和需求变更，开发story，编写单元测试，发现和修复漏洞，支持项目feature迭代、交付和上线。项目语言：React Native，Angular。'
				}, {
					name: '● 沙滩学习',
					detail: '由于疫情原因，项目机会较少，参加了四期沙滩学习，学习了iOS Object-C和Swift，Android Java和 Kotlin, Vue等语言，为以后的项目做技术储备。'
				}, {
					name: '● 华为智能穿戴',
					detail: '项目团队负责了华为新一代智能手表Watch 3系列的系统应用的开发和维护，包括锻炼、锻炼记录、训练状态、活动记录、语音备忘录、体温、complication表盘、家人关怀等应用，是业内首批进行鸿蒙系统应用开发的团队。本人是体温、活动记录、锻炼轨迹、complication表盘sdk的主要开发和负责人，且精通鸿蒙应用多语言和talkback的开发。项目语言：HarmonyOS，Andriod。'
				}, {
					name: '● 戴姆勒AMG微信小程序',
					detail: '奔驰AMG车系微信小程序的开发。本人主要负责内容管理平台CMS开发和微信小程序用户行为跟踪。项目语言：React，微信小程序。'
				}, {
					name: '● 隆基官网改造',
					detail: '为全球知名新能源企业隆基进行官网改造和迁移。本人主要负责SSR静态页面生成和story开发。项目语言：Nuxt'
				}]
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

	.project-content {
		padding: 15px;
	}

	.project-detail {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}
</style>
