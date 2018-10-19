import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, TextBox } from '../../components'

const NotFoundPage = ({ data }) => {
  const { header1, p1 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">{header1}</h1>
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
