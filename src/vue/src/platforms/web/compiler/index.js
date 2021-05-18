/* @flow */

import { baseOptions } from './options'
import { createCompiler } from '@/vue/src/compiler/index'

const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
