import React from 'react'
import renderer from 'react-test-renderer'
import ErrorSpan from './ErrorSpan'

describe('Error span component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<ErrorSpan />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
