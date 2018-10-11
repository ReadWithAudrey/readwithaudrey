import React from 'react'
import renderer from 'react-test-renderer'
import TextBox from './TextBox'

describe('TextBox component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<TextBox />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
