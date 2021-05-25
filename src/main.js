import Vue from 'vue'
// import Vue from '@/vue-src/platforms/web/runtime-with-compiler'
// import Vue from '@/vue/dist/vue.esm.js'
import App from './App.vue'
import router from '@/router'
import store from './store'
import ArtistUi from './artist-ui/index.js'
import './style/common.scss' //默认样式
import './artist-ui/theme-chalk/index.scss'
// import ElementUi from './element-ui/src'
import ElementUI from './element-ui/src'
import './element-ui/packages/theme-chalk/src/index.scss'
// import './artist-ui/animate.css'
import 'animate.css'
import TestEle from './views/components/Test2.vue'

Vue.config.productionTip = false

Vue.use(ArtistUi)


Vue.use(ElementUI, { size: 'small' })




new Vue({
  router,
  store,
  render: (h) => h(App),
  // render: (h) => <App />
  // data: {
  //   message: '消息'
  // },
  // components: {
  //   'test': {
  //     render (createElement) {
  //       // console.log('jsx', this.slots)
  //       return createElement('div', 666)
  //     }
  //   }
  // },
  // // render: (h) => <Test />

  // render: function (createElement) {
  //   return createElement('div',
  //     {
  //       attrs: {
  //         id: 'app'
  //       },
  //     },
  //     [
  //       createElement('div', this.message),
  //       createElement('div', {
  //         attrs: {
  //           style: 'color: #f00; background-color: #ddd',
  //           id: '#first1'
  //         }
  //       }, [createElement('div', '最底层组件')]),
  //       createElement('div', '子组件2'),
  //       createElement(TestEle, {})
  //     ],
  //   )
  // },
}).$mount('#app')
