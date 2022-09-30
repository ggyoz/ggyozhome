import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'NoAuthLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Login.vue')
  },
  {
    path: '/join',
    name: 'NoAuthJoin',
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  }
]

export default routes;