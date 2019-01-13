#!/usr/bin/env node

const ERROR = 0
const SUCCESS = 1

// cli imported from cli.js
var cli = require('./cli.js')

var errCatch = require('./errCatch.js')

function numConv (inVar, inBase, outBase) {
  var inBaseInternal, outBaseInternal

  var returnObj = {
    var: 0,
    err_code: SUCCESS
  }

  inBaseInternal = errCatch.baseErrCatch(inBase, true)
  outBaseInternal = errCatch.baseErrCatch(outBase, false)
  if (!inBaseInternal || !outBaseInternal) {
    console.log('Invalid base detected. Please ensure you are using bases 2 to 32!')

    returnObj.err_code = ERROR
    returnObj.var = 0
    return returnObj
  }

  var result = errCatch.inVarErrCatch(inVar, inBaseInternal)

  if (result.err_code) {
    returnObj.var = result.var
    returnObj.err_code = result.err_code
  } else {
    console.log('<in> must be a valid round integer, of the given [in_base]! The default [in_base] is decimal.')
    returnObj.err_code = ERROR
  }

  returnObj.var = returnObj.var.toString(outBaseInternal)

  return returnObj
}

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    var convObj = numConv(argv.in, argv.in_base, argv.out_base)
    console.log('Output: ' + convObj.var.toUpperCase())
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
