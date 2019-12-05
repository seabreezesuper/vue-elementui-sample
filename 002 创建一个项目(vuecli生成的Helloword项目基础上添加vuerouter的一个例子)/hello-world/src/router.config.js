import Home from './components/Home.vue'
import UserInfo from './components/UserInfo.vue'


export default {
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/UserInfo',
        component: UserInfo
    }]
}