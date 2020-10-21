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
import Help from '@/pages/Help/help.vue'
import Recruitment from '@/pages/Recruitment/recruitment.vue'
import Hotnews from '@/pages/Hotnews/hotnews.vue'
import JobDetail from '@/pages/Career/JobDetail'
// 引入home的子组件
import More from '../pages/Home/More/index'
import Download from '../pages/Home/Download/index'
//引入more的子组件
import Seckill from '@/pages/Home/More/Seckill'
import Specialsale from '@/pages/Home/More/Specialsale'
import Supermarket from '@/pages/Home/More/Supermarket'
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
		}, ]
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
		component: Detail
	},
	{
		path: '/help',
		component: Help
	},
	{
		path: '/recruitment',
		component: Recruitment
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