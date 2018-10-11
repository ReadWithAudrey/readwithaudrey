import React from 'react'
import renderer from 'react-test-renderer'
import Form3 from './index.js'

describe('Form3 page snapshot test', () =>
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Form Part 3',
        },
      },
      markdownRemark: {
        frontmatter: {
          q1: 'Your Bio',
          q2: 'Special Requirements',
          q3: 'How do you feel about Abridged books?',
        },
      },
    }
    const tree = renderer.create(<Form3 data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
