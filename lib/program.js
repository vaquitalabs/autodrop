const program = require('commander')

program
  .version('1.0.0')
  .option('-r, --react-component [name]', 'Component Name')
  .parse(process.argv)

module.exports = program
