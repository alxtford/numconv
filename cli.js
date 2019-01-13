#!/usr/bin/env node

// Figlet and Sywac added for CLI
const figlet = require('figlet')
const cli = require('sywac')
  .style(require('sywac-style-basic'))
  .preface(figlet.textSync('numconv'))
  .outputSettings({ maxWidth: 100 })
  .help('-h, --help')
  .version('-v, --version')
  .positional('<in>', { paramsDesc: 'Input value' })
  .positional('[in_base]', { paramsDesc: 'Base of input integer. Use number only, e.g. 10. Base-10 (decimal) is default' })
  .positional('[out_base]', { paramsDesc: 'Base of output integer. Use number only, e.g. 16. Base-16 (hex) is default' })
module.exports = cli
