import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import About from './AboutAudrey.style'
import { TextBox } from '../../components'
import PropTypes from 'prop-types'

const AboutAudrey = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { q1, a1, q2, a2, q3, a3 } = data.markdownRemark.frontmatter
      return (
        <About>
          <div id="what-is-audrey">
            <h2 className="f2 pink tc">{q1}</h2>
            <TextBox className="tc lh-copy f4">{a1}</TextBox>
          </div>
          <div id="who-for">
            <h2 className="f2 pink tc">{q2}</h2>
            <TextBox className="tc lh-copy f4">{a2}</TextBox>
          </div>
          <div id="who-with">
            <h2 className="f2 pink tc">{q3}</h2>
            <TextBox className="tc lh-copy f4">{a3}</TextBox>
          </div>
        </About>
      )
    }}
  />
)

AboutAudrey.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.object,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About Audrey" } }) {
      frontmatter {
        q1
        a1
        q2
        a2
        q3
        a3
      }
    }
  }
`

export default AboutAudrey
