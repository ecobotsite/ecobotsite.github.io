import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import dateTimeFilter from './utilities/filters/DateTime';

import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from 'highcharts-vue'
// @ts-ignore
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Stock(Highcharts);
Vue.use(HighchartsVue)

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.config.productionTip = false;

dateTimeFilter(Vue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
