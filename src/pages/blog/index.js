import React from 'react'
import {
  graphql
} from 'gatsby'
import PropTypes from 'prop-types'
import {
  Layout,
  TextBox,
  Title,
  BlogCard
} from '../../components'
import {
  ContainerDiv
} from '../../styles/blog.style'

const Blog = ({
  data
}) => {
  const posts = data.BlogCard.edges
  const { html } = data.Page
  const heading = data.Page.frontmatter.heading
  const finalText = data.Page.frontmatter.finalText
  return ( <
    Layout >
    <
    Title > {heading} < /Title>
    <div id="FAQs" dangerouslySetInnerHTML={{ __html: html }} />

     <
    ContainerDiv > {
      posts && posts.map(({
        node: post
      }) => (

        <
        BlogCard key = 'fds'
        title = {
          post.frontmatter.title
        }
        date = {
          post.frontmatter.date
        }
        excerpt = {
          post.excerpt
        } > < /BlogCard>
      ))
    }

    <
    /ContainerDiv> < /
    Layout >
  )
}
Blog.propTypes = {
  data: PropTypes.object,
}
export const query = graphql `
  query {
        BlogCard: allMarkdownRemark(
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
        Page: markdownRemark(frontmatter: { title: { eq: "Blog" } }) {
              html
              frontmatter {
                heading
              }
            }
      }
`

export default Blog
