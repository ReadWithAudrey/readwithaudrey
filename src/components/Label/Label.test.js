import React from 'react'
import renderer from 'react-test-renderer'
import Label from './Label'

describe('Label component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Label />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
