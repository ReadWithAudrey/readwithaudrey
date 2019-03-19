import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout, Title } from '../components/'


const BlogPost = () => {
  return (
    <Layout>
      <Title>Our Why?</Title>
      <TextBox>
        im a blog
      </TextBox>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Our Why" } }) {
      html
    }
  }
`
export default BlogPost
