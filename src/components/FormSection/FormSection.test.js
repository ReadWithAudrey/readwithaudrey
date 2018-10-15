import React from 'react'
import renderer from 'react-test-renderer'
import FormSection from './FormSection'

describe('FormSection component snapshot test', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<FormSection />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
