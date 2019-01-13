#!/usr/bin/env node

// cli imported from cli.js
var cli = require('./cli.js')

var errCatch = require('./errCatch.js')

function numConv (inVar, inBase, outBase) {
  var inBaseInternal, outBaseInternal

  inBaseInternal = errCatch.baseErrCatch(inBase, true)
  outBaseInternal = errCatch.baseErrCatch(outBase, false)
  if (!inBaseInternal || !outBaseInternal) {
    console.log('Invalid base detected. Please ensure you are using bases 2 to 32!')
    return
  }

  var result = errCatch.inVarErrCatch(inVar, inBaseInternal)

  if (result.err_code) {
    inVar = result.var
  } else {
    console.log('<in> must be a valid round integer, of the given [in_base]! The default [in_base] is decimal.')
    return
  }

  var output = inVar.toString(outBaseInternal)
  console.log('Output: ' + output.toUpperCase())
}

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    numConv(argv.in, argv.in_base, argv.out_base)
  })
}

module.exports = numConv

// if (dec < 0) {
//   // Change negative num to positive. The symbol is appended via the string!
//   dec = -dec
//   return '-0x' + dec.toString(16).toUpperCase()
// } else {
//   return '0x' + dec.toString(16).toUpperCase()
// }

// TODO Add a module.export for the logic
