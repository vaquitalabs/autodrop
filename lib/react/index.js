const fs = require('fs')
const path = require('path')
const templates = require('./templates')

const parseTemplate = (template, component) => {
  return template.replace(/_component_/g, component)
}

const buildReactComponent = (component) => {
  const dirPath = path.resolve(process.cwd(), component)
  fs.mkdirSync(dirPath)
  fs.writeFileSync(`${dirPath}/index.js`, parseTemplate(templates.index, component))
  fs.writeFileSync(`${dirPath}/${component}.js`, parseTemplate(templates.component, component))
}

module.exports = buildReactComponent
