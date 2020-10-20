// import Home from '@/pages/Home'
// 111 22233333333333
// 22222222222222222222222
// 77777
import Home from '@/pages/Home/home.vue'
import Login from '@/pages/Login/login.vue'
import Career from '@/pages/Career/Career.vue'
import Cart from '@/pages/Cart/cart.vue'
import Complaint from '@/pages/Complaint/complaint.vue'
import Cooperation from '@/pages/Cooperation/cooperation.vue'
import Detail from '@/pages/Detail/detail.vue'
import Help from '@/pages/Help/help.vue'
import Recruitment from '@/pages/Recruitment/recruitment.vue'
import Hotnews from '@/pages/Hotnews/hotnews.vue'
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/career',
        component:Career
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/complaint',
        component:Complaint
    },
    {
        path:'/cooperation',
        component:Cooperation,
        meta:{
            isShowFooterTop:false
        }
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/help',
        component:Help
    },
    {
        path:'/recruitment',
        component:Recruitment
    },
    {
        path:'/hotnews',
        component:Hotnews
    },
    {
        path:'/',
        redirect: '/home'
    }

]