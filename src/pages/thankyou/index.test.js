import React from 'react'
import renderer from 'react-test-renderer'
import Thankyou from './index.js'

describe('thankyou page snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Thankyou />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
