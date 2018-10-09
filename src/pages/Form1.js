import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { InputBox, Label, Button, StatusBar } from '../components/'

const Form1 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h2>Your Details</h2>
        <StatusBar type="active">1. Basic Details</StatusBar>
        <StatusBar>
          <Link to="/Form2">2. Further Details</Link>
        </StatusBar>
        <StatusBar>
          <Link to="/Form3">3. Your Bio</Link>
        </StatusBar>
        <p className="montserrat f6 pv2">
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
