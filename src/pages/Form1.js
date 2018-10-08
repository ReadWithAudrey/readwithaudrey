import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Form1 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>This is p1 of the form {data.site.siteMetadata.title}</h1>
      <p>Q1: {q1}</p>
      <p>Q2: {q2}</p>
      <p>Q3: {q3}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Form Part 1" } }) {
      frontmatter {
        q1
        q2
        q3
      }
    }
  }
`

export default Form1
