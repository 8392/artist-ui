import atButton from './src/Button.vue'

console.log('atButton', atButton)
atButton.install = function (Vue) {
  Vue.component(atButton.name, atButton)
}

export default atButton
