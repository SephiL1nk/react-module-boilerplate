import React from 'react'
import List from './index.js'
import renderer from 'react-test-renderer'

test('Is displaying Hello world', () => {
  const component = renderer.create(<List />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})