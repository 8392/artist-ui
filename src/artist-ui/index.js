import Button from './packages/Button'
import dialog from './packages/dialog'
import rightdialog from './packages/rightdialog'
import atModel from './packages/model/index.js'

const install = (Vue) => {
  Vue.use(Button)
  Vue.use(dialog)
  Vue.use(rightdialog)
  Vue.use(atModel)
}

export default {
  install,
}
