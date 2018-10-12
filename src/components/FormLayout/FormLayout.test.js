import React from 'react'
import renderer from 'react-test-renderer'
import { PureFormLayout as FormLayout } from './FormLayout'

describe('Form Layout', () =>
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Audrey',
        },
      },
    }
    const tree = renderer.create(<FormLayout data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
