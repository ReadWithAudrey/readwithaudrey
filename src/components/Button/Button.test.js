import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
