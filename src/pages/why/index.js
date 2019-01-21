import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout, Title } from '../../components/'

const Story = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Title>Our Why?</Title>
      <TextBox>
        <div
          className="mid-gray f4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TextBox>
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
    markdownRemark(frontmatter: { title: { eq: "Our Why" } }) {
      html
    }
  }
`
export default Story
