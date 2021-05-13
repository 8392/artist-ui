import atModel from './index.vue'

atModel.install = function (Vue) {
  Vue.component(atModel.name, atModel)
}

export default atModel
