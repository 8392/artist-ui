/* @flow */

import { baseOptions } from '@/vue/src/compiler/options'
import { createCompiler } from 'server/optimizing-@/vue/src/compiler/index'

const { compile, compileToFunctions } = createCompiler(baseOptions)

export {
  compile as ssrCompile,
  compileToFunctions as ssrCompileToFunctions
}
