import { createApp } from './main';
import './plugins-client/vue-toast';
import './plugins-client/vue-progressbar';
import './plugins-client/notify';

const { app, router, store } = createApp();

/* SSR이 있을 경우 */
if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
	console.log('entry-client.js * onReady');
	app.$mount('#app');
});