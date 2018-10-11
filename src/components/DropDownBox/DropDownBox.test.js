import React from 'react'
import renderer from 'react-test-renderer'
import DropDownBox from './DropDownBox'

describe('DropDownBox component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<DropDownBox />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
