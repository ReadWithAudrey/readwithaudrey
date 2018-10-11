import React from 'react'
import renderer from 'react-test-renderer'
import TextArea from './TextArea'

describe('TextArea component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<TextArea />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
