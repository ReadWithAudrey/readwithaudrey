import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, Title } from '../../components/'
const FAQ = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Title>Questions</Title>
      <div id="FAQs" dangerouslySetInnerHTML={{ __html: html }} />
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
