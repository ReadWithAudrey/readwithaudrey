import React from 'react'
import renderer from 'react-test-renderer'
import Examples from './Examples'

describe('Examples component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Examples />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
