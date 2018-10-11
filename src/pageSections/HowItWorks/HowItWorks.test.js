import React from 'react'
import renderer from 'react-test-renderer'
import HowItWorks from './HowItWorks'

describe('HowItWorks component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<HowItWorks />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
