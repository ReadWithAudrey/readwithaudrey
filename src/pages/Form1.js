import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import InputBox from '../components/InputBox/InputBox'
import Question from '../components/Question/Question'

const Form1 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1>Your Details</h1>
        <p>
          Welcome to Audrey, thank you for taking the steps to join our
          community.
        </p>
        <Question>{q1}</Question>
        <InputBox />
        <Question>{q2}</Question>
        <InputBox />
        <Question>{q3}</Question>
        <InputBox />
        <SubmitBtn />
      </form>
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
