#!/usr/bin/env node

const figlet = require('figlet')

const cli = require('sywac')
  .style(require('sywac-style-basic'))
  .preface(figlet.textSync('numconv'))
  .outputSettings({ maxWidth: 100 })
  .help('-h, --help')
  .version('-v, --version')
  .positional('<in>', { paramsDesc: 'Input integer', mustExist: true })
  .positional('<in type>', { paramsDesc: 'Type of input integer.', choices: ['hex', 'dec'], mustExist: true })
  .positional('<out type>', { paramsDesc: 'Type of output integer.', choices: ['hex', 'dec'], mustExist: true })
module.exports = cli

if (require.main === module) cli.parseAndExit()
