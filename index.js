#!/usr/bin/env node

// cli imported from cli.js
var cli = require('./cli.js')

var decHex = require('./dec-hex.js')
var decToHex = decHex.decToHex
var hexToDec = decHex.hexToDec

var invalidOutputWarn = 'Invalid output type. The valid output types are: \'dec\', \'hex\''
var invalidInputWarn = 'Invalid input type. The valid input types are: \'dec\', \'hex\''

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    switch (argv.out_base) {
      case 'hex':
        console.log('Hex to be outputted!')

        switch (argv.in_base) {
          case 'dec':
            console.log('Dec inputted!')
            console.log('Converted num = ' + decToHex(argv.in))
            break
          default:
            console.log(invalidInputWarn)
        }
        break
      case 'dec':
        console.log('Dec to be outputted!')

        switch (argv.in_base) {
          case 'hex':
            console.log('Hex inputted!')
            console.log('Converted num = ' + hexToDec(argv.in))
            break
          default:
            console.log(invalidInputWarn)
        }
        break
      default:
        console.log(invalidOutputWarn)
    }
  })
}
