import React from 'react'
import renderer from 'react-test-renderer'
import Form2 from './index.js'

describe('Form2 page snapshot test', () =>
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Form Part 2',
        },
      },
      markdownRemark: {
        frontmatter: {
          q1: 'Gender',
          q2: 'Age',
          q3: 'Location',
          q4: 'Time Zone',
          q5: 'Reader, Listener or Both?',
          q6: 'What would you like to read?',
        },
      },
    }
    const tree = renderer.create(<Form2 data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
