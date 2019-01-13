#!/usr/bin/env node

const SUCCESS = 1

// cli imported from cli.js
var cli = require('./src/cli.js')

// baseConvert houses the logic of it all
var baseConvert = require('./src/baseConvert.js')

module.exports = numConv

// This is maintain some amount of privacy, and to allow testing/export
function numConv (inVar, inBase, outBase) {
  return baseConvert.baseConvert(inVar, inBase, outBase)
}

// Logic to handle CLI input
if (require.main === module) {
  cli.parseAndExit().then(argv => {
    var convObj = numConv(argv.in, argv.in_base, argv.out_base)

    // Only print out the result if it was a success
    if (convObj.err_code === SUCCESS) {
      console.log('Output: ' + convObj.var)
    } else {
      console.log(convObj.log)
    }
  })
}
