import request from './request.js'

export const getMovies = () => request({
	url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=10'
})
