import React from 'react'
import renderer from 'react-test-renderer'
import Homepage from './Homepage'

describe('Homepage component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Homepage />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
