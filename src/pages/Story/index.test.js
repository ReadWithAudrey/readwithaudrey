import React from 'react'
import renderer from 'react-test-renderer'
import Story from './index.js'

describe('Story page snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Story />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
