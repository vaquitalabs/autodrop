const program = require('./program')
const buildReactComponent = require('./react')

if (program.reactComponent) {
  const component = program.reactComponent
  buildReactComponent(component)
}
