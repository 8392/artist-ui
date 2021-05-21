import Vue from 'vue'
// import Vue from '@/vue/src/platforms/web/entry-runtime-with-compiler'
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
import attrs from './vue/src/platforms/web/runtime/modules/attrs'

Vue.config.productionTip = false

Vue.use(ArtistUi)


Vue.use(ElementUI, { size: 'small' })

// console.log("Vue", Vue)

new Vue({
  router,
  store,
  // render: (h) => h(App),
  // render: (h) => <App />,
  components: {
    // Test: render(h) {
    //   return h('div', {}, 'AAA')
    // }
    Test: {
      render(h) {
        return h('div', {}, 'AAA')
      }
    }
  },
  render: (h) => {
    return h('div', {
      attrs: {
        id: '#app'
      }
    }, [
      <Test />,
      h('div', {}, [<div>我来了</div>, h('div', {}, '哈哈哈')])
    ])
  }
}).$mount('#app')
