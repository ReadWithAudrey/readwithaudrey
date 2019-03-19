import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { BlogCard, Layout, Title, TextBox } from '../../components/'
import { ContainerDiv } from './index.style.js'

const Blog = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Title>Robs blog of recent reading experiences</Title>
      <TextBox>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</TextBox>
      <ContainerDiv>
      {posts &&
          posts.map(({ node: post }) => (
            <BlogCard key = '123' link = 'google.com' excerpt = {post.excerpt} title={post.frontmatter.title} ></BlogCard>
          ))}
      </ContainerDiv>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
`
export default Blog
