import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', // necessary for places input
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
