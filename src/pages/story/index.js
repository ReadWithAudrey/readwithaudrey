import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout } from '../../components/'

const Story = ({ data }) => {
  const { text1, text2, text3, text4, text5 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Why</h1>
      <TextBox>{text1}</TextBox>

      <TextBox>{text2}</TextBox>

      <TextBox>{text3}</TextBox>

      <TextBox>{text4}</TextBox>

      <TextBox>{text5}</TextBox>
    </Layout>
  )
}

Story.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Story" } }) {
      frontmatter {
        text1
        text2
        text3
        text4
        text5
      }
    }
  }
`
export default Story
