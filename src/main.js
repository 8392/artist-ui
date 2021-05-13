import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import ArtistUi from './artist-ui/index.js'
import './artist-ui/theme-chalk/index.scss'
// import ElementUi from './element-ui/src'
import ElementUI from './element-ui/src'
import './element-ui/packages/theme-chalk/src/index.scss'
// import './artist-ui/animate.css'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(ArtistUi)


Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
