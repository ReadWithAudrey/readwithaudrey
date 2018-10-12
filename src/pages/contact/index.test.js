import React from 'react'
import renderer from 'react-test-renderer'
import ContactUs from './index.js'

describe('ContactUs page snapshot test', () =>
  it('renders correctly', () => {
    // console.log(Thankyou)
    const tree = renderer.create(<ContactUs />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
