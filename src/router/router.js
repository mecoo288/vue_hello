import App from '../App'

const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')



export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
    ]
}]