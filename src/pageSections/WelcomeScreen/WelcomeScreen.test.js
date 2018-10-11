import React from 'react'
import renderer from 'react-test-renderer'
import WelcomeScreen from './WelcomeScreen'

describe('Homepage component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<WelcomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
