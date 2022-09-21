import { createApp } from './main';

const { app, router, store } = createApp();

/* SSR이 있을 경우 */
if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
	app.$mount('#app');
});