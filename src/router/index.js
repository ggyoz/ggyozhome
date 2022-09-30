import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";

Vue.use(VueRouter)

export function createRouter() {
	const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes
	});

  // router.beforeEach((to, from, next) => {
  //   console.log('router.js * beforeEach');
  //   next(); // next를 꼭 해줘야 다음으로 진행됨.
  // })

	// router.afterEach((to, from)=> {
	// 	console.log('router.js * afterEach')
	// })

	return router;
}