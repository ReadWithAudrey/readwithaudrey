import React from 'react'
import renderer from 'react-test-renderer'
import RankingBox from './RankingBox'

describe('RankingBox component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<RankingBox />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
