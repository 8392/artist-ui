/* @flow */

import { addProp } from '@/vue/src/compiler/helpers'

export default function text (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'textContent', `_s(${dir.value})`, dir)
  }
}
