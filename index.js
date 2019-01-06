#!/usr/bin/env node

// Tap added for testing
// var tap = require('tap')

// cli imported from cli.js
var cli = require('./cli.js')

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    console.log(argv)
  })
}
