// import Home from '@/pages/Home'
import Home from '@/pages/Home'
import Login from '@/pages/Login/login.vue'
import Career from '@/pages/Career/Career.vue'
import Cart from '@/pages/Cart/cart.vue'
import Complaint from '@/pages/Complaint/complaint.vue'
import Cooperation from '@/pages/Cooperation/cooperation.vue'
import Detail from '@/pages/Detail/detail.vue'
import Help from '@/pages/Help/help.vue'
import Recruitment from '@/pages/Recruitment/recruitment.vue'
import Hotnews from '@/pages/Hotnews/hotnews.vue'
// 引入home的子组件
import More from '../pages/Home/More/index'
import Download from '../pages/Home/Download/index'
export default [
    {
        path: '/home',
        component: Home,
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
        path: '/login',
        component: Login
    },
    {
        path: '/career',
        component: Career
    },
    {
<<<<<<< HEAD
        path: '/cart',
        component: Cart
=======
        path:'/cooperation',
        component:Cooperation,
        meta:{
            isShowFooterTop:false
        }
>>>>>>> feature/yangzhiqiang
    },
    {
        path: '/complaint',
        component: Complaint
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
        path: '/',
        redirect: '/home'
    }

]