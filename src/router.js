import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/LoginPage.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/SignupPage.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import(/* webpackChunkName: "about" */ './views/LogoutPage.vue'),
    },
    {
      path: '/tweet',
      name: 'tweet',
      component: () => import(/* webpackChunkName: "about" */ './views/TweetPage.vue'),
    },
  ],
});
