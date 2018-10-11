import React from 'react'
import renderer from 'react-test-renderer'
import Aboutpage from './AboutAudrey'

describe('Aboutpage component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Aboutpage />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
