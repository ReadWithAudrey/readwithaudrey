import React from 'react'
import renderer from 'react-test-renderer'
import InputBox from './InputBox'

describe('InputBox component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<InputBox />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
