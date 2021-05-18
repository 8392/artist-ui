/* @flow */

import * as nodeOps from 'weex/runtime/node-ops'
import { createPatchFunction } from '@/vue/src/core/vdom/patch'
import baseModules from '@/vue/src/core/vdom/modules/index'
import platformModules from 'weex/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({
  nodeOps,
  modules,
  LONG_LIST_THRESHOLD: 10
})
