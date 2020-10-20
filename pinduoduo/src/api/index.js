import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = ()=> ajax.get('/hotnews')
<<<<<<< HEAD
<<<<<<< HEAD
//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)
=======
=======
//发送请求获取热招岗位列表
export const reqHotpositionList = () => ajax.get('/hotposition')
//发送请求获取最新的职位列表
export const reqLatestPositionList = (job,page,pageSize) => ajax.post('/careers',{job,page,pageSize})
//发送请求获取招聘详情列表
export const reqJobdetail = (code) => ajax.post('/jobdetail',{code})
//获取媒体报道列表
export const reqMediaReports=(page,pageSize)=>ajax.get(`/mediareports/${page}/${pageSize}`)
// 发送请求获取首页数据
export const reqHome = () => ajax.get('/indexData')


>>>>>>> 689eb6016ff19e383e57af9feb9779ebbd806595

>>>>>>> feature-LJM
