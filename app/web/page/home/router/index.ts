import Vue from 'vue';
import iView from 'iview';

import VueRouter from 'vue-router';
import Util from '../../../../utils/util';
import HomeView from '../home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeView
        }
    ]
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    // Util.toDefaultPage(routers, to.name, router, next);
    next();
});

router.afterEach((to) => {
    Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;