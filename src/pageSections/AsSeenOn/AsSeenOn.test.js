import React from 'react'
import renderer from 'react-test-renderer'
import AsSeenOn from './AsSeenOn'

describe('AsSeenOn component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<AsSeenOn />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
