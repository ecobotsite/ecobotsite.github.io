import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import dateTimeFilter from './utilities/filters/DateTime';

import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from 'highcharts-vue'
import 'element-ui/lib/theme-chalk/index.css';

// @ts-ignore
import locale from 'element-ui/lib/locale/lang/ua';
import 'vue-select/dist/vue-select.css';
import Element from 'element-ui';
// @ts-ignore
import vSelect from 'vue-select';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('v-select', vSelect)


Vue.use(Element, {locale})
Stock(Highcharts);
Vue.use(HighchartsVue)

Vue.config.productionTip = false;

dateTimeFilter(Vue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
