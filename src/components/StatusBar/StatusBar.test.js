import React from 'react'
import renderer from 'react-test-renderer'
import StatusBar from './StatusBar'

describe('StatusBar component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<StatusBar />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
