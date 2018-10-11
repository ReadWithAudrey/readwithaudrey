import React from 'react'
import renderer from 'react-test-renderer'
import RadioButton from './RadioButton'

describe('RadioButton component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<RadioButton />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
