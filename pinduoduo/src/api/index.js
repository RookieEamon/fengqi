import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = ()=> ajax.get('/hotnews')

//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)

