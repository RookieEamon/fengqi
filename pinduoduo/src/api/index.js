import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = ()=> ajax.get('/hotnews')
<<<<<<< HEAD
=======
//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)
>>>>>>> 1b4d95bc938c853d6b8c96f5005e410457b51121
//发送请求获取热招岗位列表
export const reqHotpositionList = () => ajax.get('/hotposition')
//发送请求获取最新的职位列表
export const reqLatestPositionList = (job,page,pageSize) => ajax.post('/careers',{job,page,pageSize})
//发送请求获取招聘详情列表
export const reqJobdetail = (code) => ajax.post('/jobdetail',{code})
<<<<<<< HEAD
//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)
=======
>>>>>>> 1b4d95bc938c853d6b8c96f5005e410457b51121
// 发送请求获取首页数据
export const reqHome = () => ajax.get('/indexData')

