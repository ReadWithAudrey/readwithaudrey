import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, TextBox, Title } from '../../components'

const NotFoundPage = ({ data }) => {
  const { header1, p1 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Title>{header1}</Title>
      <TextBox>{p1}</TextBox>
    </Layout>
  )
}
NotFoundPage.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "404" } }) {
      html
      frontmatter {
        header1
        p1
      }
    }
  }
`

export default NotFoundPage
