import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = ()=> ajax.get('/hotnews')
//发送请求获取热招岗位列表
export const reqHotpositionList = () => ajax.get('/hotposition')
//发送请求获取最新的职位列表
export const reqLatestPositionList = (job,page,pageSize) => ajax.post('/careers',{job,page,pageSize})
//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)
