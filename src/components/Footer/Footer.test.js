import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
