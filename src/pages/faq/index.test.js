import React from 'react'
import renderer from 'react-test-renderer'
import FAQ from './index.js'

describe('FAQ page snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<FAQ />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
