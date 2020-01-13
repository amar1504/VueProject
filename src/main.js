import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
