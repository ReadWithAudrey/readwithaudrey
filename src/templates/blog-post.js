import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout, Title } from '../components/'


const BlogPost = ({data}) => {
  const { html } = data.markdownRemark
  const { date, title, description } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Title>{title}</Title>       <TextBox>Posted on {date}</TextBox>
      <TextBox>
        {description}
      </TextBox>
      <div id="FAQs" dangerouslySetInnerHTML={{ __html: html }} />



    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByTitle($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
