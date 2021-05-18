/* @flow */

import { identity, resolveAsset } from '@/vue/src/core/util/index'

/**
 * Runtime helper for resolving filters
 */
export function resolveFilter (id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
