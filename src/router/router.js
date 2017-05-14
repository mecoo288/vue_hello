import App from '../App';

const login = r => require.ensure([], () => r(require('../page/login/')), 'login');
const scene = r => require.ensure([], () => r(require('../page/scene/')), 'scene');
const main = r => require.ensure([], () => r(require('../page/main/')), 'main');



export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        //场景首页
        {
            path: '/main',
            component: main
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        //选择场景页
        {
            path: '/scene',
            component: scene
        }
    ]
}];