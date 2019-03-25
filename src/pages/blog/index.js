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
} from './index.style'

const Blog = ({
  data
}) => {
  const {
    edges: posts
  } = data.allMarkdownRemark
  return ( <
    Layout >
    <
    Title > The Read With Audrey blog < /Title> <
    TextBox > random text < /TextBox> <
    ContainerDiv > {
      posts && posts.map(({
        node: post
      }) => (

        <
        BlogCard key = 'fds'
        link = {
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
    /ContainerDiv> <
    /Layout>
  )
}
Blog.propTypes = {
  data: PropTypes.object,
}
export const query = graphql `
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