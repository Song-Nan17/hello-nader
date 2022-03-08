<template>
	<view>
		<uni-card v-for="(movie,index) in movies" :key="index">
			<view class="custom-cover" slot='cover'>
				<image class="movie-poster" @error="handleImageError($event, index)" :src="movie.images.large"
					mode="aspectFit"></image>
				<view class="cover-aside">
					<text class="movie-name">{{movie.title}}</text>
					<text class="movie-year">{{movie.year}}</text>
				</view>
			</view>
			<text class="movie-summary">{{movie.summary}}</text>
		</uni-card>
	</view>
</template>

<script>
	import {
		getMovies
	} from '../../service/api.js'
	export default {
		data() {
			return {
				movies: []
			}
		},
		onLoad() {
			getMovies().then(data => {
				this.movies = data.subjects || []
			})
		},
		methods: {
			handleImageError(event, index) {
				this.movies[index].images = {
					large: '/static/movie.png'
				}
			}
		}
	}
</script>

<style>
	.custom-cover {
		margin: 20rpx;
		padding-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 1rpx solid #bfbfbf;
	}

	.movie-poster {
		height: 200rpx;
		width: 150rpx;
	}

	.cover-aside {
		margin-left: 50rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.movie-name {
		font-size: 40rpx;
		color: #2c2c2c;
		margin-bottom: 20rpx;
	}

	.movie-year {
		color: #8a8a8a;
	}

	.movie-summary {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
	}
</style>
