/* @flow */

import { camelize } from '@/vue/src/shared/util'
import { generateBinding } from 'weex/util/parser'
import { bindRE } from '@/vue/src/compiler/parser/index'
import { getAndRemoveAttr, addRawAttr } from '@/vue/src/compiler/helpers'

function parseAttrName (name: string): string {
  return camelize(name.replace(bindRE, ''))
}

export function preTransformVBind (el: ASTElement) {
  for (const attr in el.attrsMap) {
    if (bindRE.test(attr)) {
      const name: string = parseAttrName(attr)
      const value = generateBinding(getAndRemoveAttr(el, attr))
      delete el.attrsMap[attr]
      addRawAttr(el, name, value)
    }
  }
}
