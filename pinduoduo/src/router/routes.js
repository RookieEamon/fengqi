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
          isHeaderAndFooter: true
        },
      },
      {
        path: '/complaint/reportdetail',
        component: ReportDetail,
        meta: {
          isHeaderAndFooter: true
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