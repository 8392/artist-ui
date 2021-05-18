/* @flow */

import { escape } from '../util'
import { genClassForVnode } from '@/vue/src/platforms/'

export default function renderClass (node: VNodeWithData): ?string {
  const classList = genClassForVnode(node)
  if (classList !== '') {
    return ` class="${escape(classList)}"`
  }
}
