import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout } from '../../components/'

const Story = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f1 pink tc montserrat mt5 mb4">Our Why?</h1>
      <TextBox>
        <div className="mid-gray f4" dangerouslySetInnerHTML={{ __html: html }} />
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
