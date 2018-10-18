import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import StyledExamples from './Examples.style'
import PropTypes from 'prop-types'

const Examples = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { html } = data.markdownRemark
      const { header, footer } = data.markdownRemark.frontmatter
      return (
        <StyledExamples>
          <h1 className="f1 pink tc">{header}</h1>
          <div className="f4 mid-gray tc" dangerouslySetInnerHTML={{ __html: html }} />
          <p className="f3 tc mid-gray">{footer}</p>
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
      html
      frontmatter {
        header
        footer
      }
    }
  }
`

export default Examples
