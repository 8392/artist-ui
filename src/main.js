import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArtistUi from './artist-ui/index.js'
import './artist-ui/theme-chalk/index.scss'
Vue.config.productionTip = false

Vue.use(ArtistUi)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
