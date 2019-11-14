import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home/Home.vue')
    },
    {
      path: 'play.html',
      name: 'play',
      component: () => import('./pages/Play/Play.vue')
    },
    {
      path: '/404.html',
      name: '404 not fount',
      component: () => import('./pages/404/404.vue'),
    },
    { path: '*', redirect: '/404.html', hidden: true },
  ],
});


