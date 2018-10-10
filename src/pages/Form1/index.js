import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { InputBox, Label, Button, Layout } from '../../components/'

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
        <Label>{q1}</Label>
        <InputBox placeholder="First Name" />
        <Label>{q2}</Label>
        <InputBox placeholder="Second Name" />
        <Label>{q3}</Label>
        <InputBox placeholder="Email Adress" />
        <Button>Submit</Button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

Form1.propTypes = {
  data: PropTypes.object,
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
