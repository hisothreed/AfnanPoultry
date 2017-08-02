// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Vulma from 'vulma'
import Vuetify from 'vuetify'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Buefy)
Vue.use(Vulma)
Vue.use(Vuetify)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
