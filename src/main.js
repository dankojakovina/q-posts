import Vue from 'vue'
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import App from './App.vue'
import { createRouter } from './router';
import messages from './locales';
import vueService from './services/vueService';
import theme from './theme/index';
import state from './state/configuration';

Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(VueRouter);

const vueApp =new Vue({
  render: h => h(App),
  i18n: new VueI18n({ locale: 'en', messages }),
  router: createRouter()
}).$mount('#app')

vueService.init(vueApp, theme);
state.init();
