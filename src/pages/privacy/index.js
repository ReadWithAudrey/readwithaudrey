import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, Title } from '../../components/'
const Privacy = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Title>Privacy</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

Privacy.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Privacy" } }) {
      html
      frontmatter {
        footer
      }
    }
  }
`

export default Privacy
