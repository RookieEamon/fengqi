import ajax from './ajax'
//发送请求获取热点资讯
export const reqHotNews = () => ajax.get('/hotnews')
export const goodsList = () => ajax.get('/indexData')
export const Careers = (job, page, pageSize) => ajax.post('/careers', { job, page, pageSize })