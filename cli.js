#!/usr/bin/env node

// Figlet and Sywac added for CLI
const figlet = require('figlet')
const cli = require('sywac')
  .style(require('sywac-style-basic'))
  .preface(figlet.textSync('numconv'))
  .outputSettings({ maxWidth: 100 })
  .help('-h, --help')
  .version('-v, --version')
  .positional('<in>', { paramsDesc: 'Input value', mustExist: true })
  .positional('<in_base>', { paramsDesc: 'Base of input integer. Base-10 is default'})
  .positional('<out_base>', { paramsDesc: 'Base of output integer. Base-16 is default'})
module.exports = cli
