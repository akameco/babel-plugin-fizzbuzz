// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    `
  for (var i=0; i<100; i++) {
    console.log(i)
  }
  `,
    `
  for (var j=0; j<100; j++) {
    console.log(j)
  }
  `,
  ],
})
