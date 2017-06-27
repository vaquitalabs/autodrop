#!/usr/bin/env node

const program = require('./../lib/program')
const buildReactComponent = require('./../lib/react')

if (program.reactComponent) {
  const component = program.reactComponent
  buildReactComponent(component)
}
