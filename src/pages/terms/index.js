import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, Title } from '../../components/'
const Terms = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Title>Terms and conditions of use</Title>
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
