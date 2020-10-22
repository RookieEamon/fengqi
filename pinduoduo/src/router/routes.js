import Home from '@/pages/Home'
const Login = ()=>import('@/pages/Login/login.vue')
const Register = ()=>import('@/pages/Register/register.vue')
const Career = ()=>import('@/pages/Career/Career.vue')
const Cart = ()=>import('@/pages/Cart/cart.vue')
const Complaint = ()=>import('@/pages/Complaint/complaint.vue')
const Contraband = ()=> import('@/pages/Complaint/Contraband')
const IntegrityReport = () => import('@/pages/Complaint/IntegrityReport')
const MerchantBackground = () => import('@/pages/Complaint/MerchantBackground')
const ReportDetail = () => import('@/pages/Complaint/ReportDetail') ;
const Cooperation = () => import('@/pages/Cooperation/cooperation.vue') 
const Detail = () => import('@/pages/Detail/detail.vue') 
const Shopping = () => import('../pages/Shopping/shopping') 
const Help = () => import('@/pages/Help/help.vue') 
const Recruitment = () => import('@/pages/Recruitment/recruitment.vue') 
const Hotnews = () => import('@/pages/Hotnews/hotnews.vue') 
const JobDetail = () => import('@/pages/Career/JobDetail') 
// 引入home的子组件
const More = () => import('../pages/Home/More/index') 
const Download = () => import('../pages/Home/Download/index') 
//引入more的子组件
const Seckill = () => import('@/pages/Home/More/Seckill') 
const Specialsale = () => import('@/pages/Home/More/Specialsale') 
const Supermarket = () => import('@/pages/Home/More/Supermarket') 
//引入Recruitment的子组件
const Main = () => import('../pages/Recruitment/Main') 
//招聘信息  应届生招聘
const Jobinformation = () => import('../pages/Recruitment/Jobinformation') 
//引入应届生招聘的路由子组件  应届生招聘-招聘信息
const Position = () => import('../pages/Recruitment/Jobinformation/Position/index.vue') 
//引入应届生招聘的路由子组件  应届生招聘-招聘流程
const Process = () => import('../pages/Recruitment/Jobinformation/Process') 
//实习生招聘通用
const Intern = () => import('../pages/Recruitment/Intern') 

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
		path: '/register',
		component: Register
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
		component: More,
		children :[
			{
				path:'/home/more/seckill',
				component: Seckill
			},
			{
				path:'/home/more/specialsale',
				component:Specialsale
			},
			{
				path:'/home/more/supermarket',
				component:Supermarket
			},
			// 重定向
			{
				path:'/home/more',
				redirect:'/home/more/seckill'
			}
		]
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