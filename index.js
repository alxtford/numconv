#!/usr/bin/env node

// cli imported from cli.js
var cli = require('./cli.js')

// var decHex = require('./baseCalc.js')

var inVar, inBase, outBase

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    console.log(argv)

    inBase = argv.in_base
    outBase = argv.out_base
    inVar = argv.in

    if (inBase == null) {
      console.log('Default in_base!')
      inBase = 10
    }
    if (outBase == null) {
      console.log('Default out_base!')
      outBase = 16
    }
    if (!Number.isInteger(inVar) && inBase !== 16) {
      console.log('<in> must be a round integer!')
    }
  })
}
