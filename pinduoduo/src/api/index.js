import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = ()=> ajax.get('/hotnews')
