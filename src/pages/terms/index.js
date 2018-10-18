import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../../components/'
const Terms = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">
        Terms and conditions of use
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

Terms.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Terms" } }) {
      html
      frontmatter {
        footer
      }
    }
  }
`

export default Terms
