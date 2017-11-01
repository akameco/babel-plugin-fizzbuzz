// @flow weak
// import blog from 'babel-log'

function looksLike(a, b) {
  return (
    a &&
    b &&
    Object.keys(b).every(bKey => {
      const bVal = b[bKey]
      const aVal = a[bKey]
      if (typeof bVal === 'function') {
        return bVal(aVal)
      }
      return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal)
    })
  )
}

function isPrimitive(val) {
  // eslint-disable-next-line
  return val == null || /^[sbn]/.test(typeof val)
}

const consoleLogPath = {
  node: {
    callee: {
      type: 'MemberExpression',
      object: { name: 'console' },
      property: { name: 'log' },
    },
  },
}

const CREATED = Symbol('CREATED')

export default ({ types: t, template }) => {
  const builder = template(`
  console.log(ID % 15 === 0 ? 'FizzBuzz' : ID % 3 === 0 ? 'Fizz' : ID % 5 === 0 ? 'Buzz' : ID)
  `)

  return {
    name: 'babel-plugin-fizzbuzz',
    visitor: {
      CallExpression(nodePath) {
        if (nodePath[CREATED]) {
          return
        }

        if (!looksLike(nodePath, consoleLogPath)) {
          return
        }

        const { node: id } = nodePath.get('arguments.0.name')
        nodePath.replaceWith(builder({ ID: t.identifier(id) }))
        nodePath[CREATED] = true
      },
    },
  }
}
