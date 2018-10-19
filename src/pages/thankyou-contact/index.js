import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { TextBox, Layout } from '../../components/'

const ThankYouContact = ({ data }) => {
  const { header1, p1 } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f3 pink tc montserrat mb3">{header1}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">
        <TextBox>{p1}</TextBox>
      </Link>
    </Layout>
  )
}

ThankYouContact.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Thank You Contact" } }) {
      html
      frontmatter {
        header1
        p1
      }
    }
  }
`

export default ThankYouContact
