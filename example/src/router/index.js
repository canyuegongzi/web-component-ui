import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: {
                path: '/home'
            }
        },
        {
            path: '/home',
            component: () => import('../views/home/HomeList'),
        },
        {
            path: '/about',
            component: () => import('../views/about/AboutList'),
        },
        {
            path: '/pug',
            component: () => import('../views/pug/Pug'),
        },

    ]
});
