import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import router from './router';
import store from './store/';
import axios from 'axios';
import VueMeta from 'vue-meta';
import Vuex from 'vuex';

import '@/styles/index.scss'; // global css

Vue.config.productionTip = false;
Vue.prototype.$http  =  axios;
Vue.use(Vuex);
Vue.use(VModal, { dynamic: true, dynamicDefaults: { heigh:'auto', clickToClose: false}, });
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});


new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app');