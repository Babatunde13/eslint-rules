const lintCode = (context, node) => {
  const filePath = context.getFilename()
  const cwd = context.getCwd()
  const relativeFilePath = filePath.replace(cwd, '')
  if (relativeFilePath.startsWith('/dangerous')) {
    return
  }

  context.report({
    node,
    message: 'function name cannot be "dangerous"',
  })
}

module.exports = {
  meta: {
    name: 'no-dangerous-func',
    type: 'problem',
    docs: {
      description: 'Disallow the use of the dangerous function outside of `dangerous/`.',
      category: 'Possible Errors',
    },
    schema: []
  },
  create: (context) => ({
    CallExpression(node) {
      if (node.callee.name === 'dangerous') {
        lintCode(context, node)
      }
    },
    FunctionDeclaration(node) {
      if (node.id.name === 'dangerous') {
        lintCode(context, node)
      }
    }
  })
}
