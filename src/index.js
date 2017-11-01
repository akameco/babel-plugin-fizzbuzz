// @flow weak
import looksLike from 'babel-looks-like'
// import blog from 'babel-log'

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
