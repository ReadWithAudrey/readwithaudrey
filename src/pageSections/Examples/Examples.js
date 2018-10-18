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
          <h1 className="f2 pink tc">{header}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p className="f4 tc">{footer}</p>
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
