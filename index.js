#!/usr/bin/env node

// cli imported from cli.js
var cli = require('./cli.js')

var errCatch = require('./errCatch.js')

var inVar, inBase, outBase

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    inBase = errCatch.baseErrCatch(argv.in_base, true)
    outBase = errCatch.baseErrCatch(argv.out_base, false)
    if (!inBase || !outBase) {
      console.log('Invalid base detected. Please ensure you are using bases 2 to 32!')
      return
    }

    var result = errCatch.inVarErrCatch(argv.in, inBase)

    if (result.err_code) {
      inVar = result.var
    } else {
      console.log('<in> must be a valid round integer, of the given [in_base]! The default [in_base] is decimal.')
      return
    }

    var output = inVar.toString(outBase)
    console.log('Output: ' + output.toUpperCase())

    // if (!Number.isInteger(inVar) && inBase !== 16) {
    //   console.log('<in> must be a round integer!')
    // }
  })
}

// if (dec < 0) {
//   // Change negative num to positive. The symbol is appended via the string!
//   dec = -dec
//   return '-0x' + dec.toString(16).toUpperCase()
// } else {
//   return '0x' + dec.toString(16).toUpperCase()
// }

// TODO Add a module.export for the logic
