// import Home from '@/pages/Home'
import Home from '@/pages/Home'
import Login from '@/pages/Login/login.vue'
import Career from '@/pages/Career/Career.vue'
import Cart from '@/pages/Cart/cart.vue'
import Complaint from '@/pages/Complaint/complaint.vue'
import Contraband from '@/pages/Complaint/Contraband';
import IntegrityReport from '@/pages/Complaint/IntegrityReport';
import MerchantBackground from '@/pages/Complaint/MerchantBackground';
import ReportDetail from '@/pages/Complaint/ReportDetail';
import Cooperation from '@/pages/Cooperation/cooperation.vue'
import Detail from '@/pages/Detail/detail.vue'
import Shopping from '../pages/Shopping/shopping.vue'
import Help from '@/pages/Help/help.vue'
import Recruitment from '@/pages/Recruitment/recruitment.vue'
import Hotnews from '@/pages/Hotnews/hotnews.vue'
import JobDetail from '@/pages/Career/JobDetail'
// 引入home的子组件
import More from '../pages/Home/More/index'
import Download from '../pages/Home/Download/index'

//引入Recruitment的子组件
import Main from '../pages/Recruitment/Main'
//招聘信息  应届生招聘
import Jobinformation from '../pages/Recruitment/Jobinformation'

//引入应届生招聘的路由子组件  应届生招聘-招聘信息
import Position from '../pages/Recruitment/Jobinformation/Position/index.vue'
//引入应届生招聘的路由子组件  应届生招聘-招聘流程
import Process from '../pages/Recruitment/Jobinformation/Process'


//实习生招聘通用
import Intern from '../pages/Recruitment/Intern'



export default [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/career',
		component: Career,
		children: [{
			path: '/career/jobdetail',
			component: JobDetail
		},]
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/complaint',
		component: Complaint,
		children: [
			{
				path: '/complaint/integrityreport',
				component: IntegrityReport,
				meta: {
					isHeaderAndFooter: true
				},
			},
			{
				path: '/complaint/merchantbackground',
				component: MerchantBackground,
				meta: {
					isHeaderAndFooter: true,
					isHeader: true

				},
			},
			{
				path: '/complaint/reportdetail',
				component: ReportDetail,
				meta: {
					isHeaderAndFooter: true,
					isHeader: true
				},
			},
			{
				path: '/complaint/contraband',
				component: Contraband,
				meta: {
					isHeaderAndFooter: true
				},
			},
			{
				path: '/complaint',
				component: IntegrityReport,
				meta: {
					isHeaderAndFooter: true
				},
			},
		]
	},
	{
		path: '/cooperation',
		component: Cooperation
	},
	{
		path: '/detail',
		component: Detail,
		meta: {
			isHeaderAndFooter: true
		}
	},
	{
		path: '/shopping',
		component: Shopping
	},
	{
		path: '/help',
		component: Help
	},
	{
		path: '/recruitment',
		component: Recruitment,
		meta: {
			hideHead: true,
		},
		children: [{ //校园招聘首页
				path: '/recruitment',
				component: Main
			},
			{
				// 应届生招聘
				path: '/recruitment/jobinformation',
				component: Jobinformation,
				children: [
					{
						//应届生招聘-招聘职位
						path: '/recruitment/jobinformation/',
						component: Position,
					},
					{
						//应届生招聘-招聘职位
						path: '/recruitment/jobinformation/position',
						component: Position,
					},
					{
						//应届生招聘-招聘流程
						path: '/recruitment/jobinformation/process',
						component: Process,

					}
				]
			},
			{
				// 实习生招聘
				path: '/recruitment/intern',
				component: Intern
			},
		]

	},
	{
		path: '/hotnews',
		component: Hotnews
	},
	{
		path: '/home/more',
		component: More
	},
	{
		path: '/home/download',
		component: Download
	},
	{
		path: '/',
		redirect: '/home'
	}
]