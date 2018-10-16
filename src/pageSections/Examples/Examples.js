import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import StyledExamples from './Examples.style'
import PropTypes from 'prop-types'

const Examples = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { h1, e1, e2, e3, e4, e5, e6, f1 } = data.markdownRemark.frontmatter
      return (
        <StyledExamples>
          <h1 className="f2 pink tc">{h1}</h1>
          <ul className="tl">
            <li className="pv2">{e1}</li>
            <li className="pv2">{e2}</li>
            <li className="pv2">{e3}</li>
            <li className="pv2">{e4}</li>
            <li className="pv2">{e5}</li>
            <li className="pv2">{e6}</li>
          </ul>
          <p className="f4 tc">{f1}</p>
        </StyledExamples>
      )
    }}
  />
)

Examples.propTypes = {
  siteTitle: PropTypes.string,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Examples" } }) {
      frontmatter {
        h1
        e1
        e2
        e3
        e4
        e5
        e6
        f1
      }
    }
  }
`

export default Examples
