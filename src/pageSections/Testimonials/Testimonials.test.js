import React from 'react'
import renderer from 'react-test-renderer'
import Testimonials from './Testimonials'

describe('Examples component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Testimonials />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
