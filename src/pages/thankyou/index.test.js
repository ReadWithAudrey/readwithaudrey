import React from 'react'
import renderer from 'react-test-renderer'
import Thankyou from './index.js'

describe('thankyou page snapshot test', () =>
  it('renders correctly', () => {
    // console.log(Thankyou)
    const tree = renderer.create(<Thankyou />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
