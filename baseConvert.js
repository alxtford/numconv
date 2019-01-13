#!/usr/bin/env node

const ERROR = 0
const SUCCESS = 1

// errCatch does all of the heavy checking
var errCatch = require('./errCatch.js')

module.exports = {
baseConvert: function (inVar, inBase, outBase) {
  var inBaseInternal, outBaseInternal

  var returnObj = {
    var: 0,
    err_code: SUCCESS,
    log: ''
  }
  // Check each base, and return if an error is detected
  inBaseInternal = errCatch.baseErrCatch(inBase, true)
  outBaseInternal = errCatch.baseErrCatch(outBase, false)
  if (!inBaseInternal || !outBaseInternal) {
    returnObj.log = 'Invalid base detected. Please ensure you are using bases 2 to 32!'

    returnObj.err_code = ERROR
    returnObj.var = 0
    return returnObj
  }

  // Check the inVar, and return if error is returned
  var result = errCatch.inVarErrCatch(inVar, inBaseInternal)

  if (result.err_code) {
    returnObj.var = result.var
    returnObj.err_code = result.err_code
  } else {
    returnObj.log = '<in> must be a valid round integer, of the given [in_base]! The default [in_base] is decimal.'
    returnObj.err_code = ERROR
  }

  // Set our output var to the required base
  returnObj.var = returnObj.var.toString(outBaseInternal).toUpperCase()

  if (outBaseInternal === 16) {
    returnObj.var = '0x' + returnObj.var
  }

  // return the final object
  return returnObj
}
}
