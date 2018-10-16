import React from 'react'
import renderer from 'react-test-renderer'
import Form1 from './index.js'

describe('Form1 page snapshot test', () =>
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Form Part 1',
        },
      },
      markdownRemark: {
        frontmatter: {
          q1: 'First Name',
          q2: 'Surname',
          q3: 'Email Address',
        },
      },
    }
    const tree = renderer.create(<Form1 data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
