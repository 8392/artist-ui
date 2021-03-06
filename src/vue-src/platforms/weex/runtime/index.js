/* @flow */

import Vue from '../../../../core/index'
import { patch } from '../runtime/patch'
import { mountComponent } from '../../../../core/instance/lifecycle'
import platformDirectives from '../runtime/directives/index'
import platformComponents from '../runtime/components/index'

import {
  query,
  mustUseProp,
  isReservedTag,
  isUnknownElement
} from 'weex/util/index'

// install platform specific utils
Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isUnknownElement = isUnknownElement

// install platform runtime directives and components
Vue.options.directives = platformDirectives
Vue.options.components = platformComponents

// install platform patch function
Vue.prototype.__patch__ = patch

// wrap mount
Vue.prototype.$mount = function (
  el?: any,
  hydrating?: boolean
): Component {
  return mountComponent(
    this,
    el && query(el, this.$document),
    hydrating
  )
}

export default Vue
