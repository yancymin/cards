import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atelier-dune-light.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
