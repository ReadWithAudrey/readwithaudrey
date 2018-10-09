import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { InputBox, Label, Button, StatusBar } from '../components/'

const Form2 = ({ data }) => {
  const { q1, q2, q3, q4, q5 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1>Further Details</h1>
        <StatusBar>
          <Link to="/Form1">1. Basic Details</Link>
        </StatusBar>
        <StatusBar type="active">2. Further Details</StatusBar>
        <StatusBar>
          <Link to="/Form3">3. Your Bio</Link>
        </StatusBar>
        <p>
          In order to find the best reading partner for you, we need a little
          bit more information
        </p>
        <Label>{q1}</Label>
        <InputBox placeholder="First Name" />
        <Label>{q2}</Label>
        <InputBox placeholder="Second Name" />
        <Label>{q3}</Label>
        <InputBox placeholder="Email Adress" />
        <Label>Q4: {q4}</Label>
        <InputBox placeholder="Email Adress" />
        <Label>{q5}</Label>
        <InputBox placeholder="Email Adress" />

        <Button>Submit</Button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

Form2.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Form Part 2" } }) {
      frontmatter {
        q1
        q2
        q3
        q4
        q5
      }
    }
  }
`

export default Form2
