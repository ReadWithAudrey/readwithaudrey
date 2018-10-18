import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../../components/'
const FAQ = ({ data }) => {
  // const { footer } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f1 pink tc montserrat mb4 mt5">Questions</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

FAQ.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "FAQs" } }) {
      html
      frontmatter {
        footer
      }
    }
  }
`

export default FAQ
