import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Label, Button, StatusBar, RadioButton, TextBox } from '../components/'

const Form3 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1>Further Details</h1>
        <StatusBar>
          <Link to="/Form1">1. Basic Details</Link>
        </StatusBar>
        <StatusBar>
          <Link to="/Form2">2. Further Details</Link>
        </StatusBar>
        <StatusBar type="active">
          <Link to="/Form3">3. Your Bio</Link>
        </StatusBar>
        <p>
          We will use your bio to find you a reading partner. This is also the
          wording we’ll use to introduce you to your reading partner over email.
        </p>
        <Label>{q1}</Label>
        <TextBox placeholder="About You" />
        <Label>{q2}</Label>
        <TextBox placeholder="Special Requirements" />
        <Label>{q3}</Label>
        <RadioButton>1</RadioButton>
        <RadioButton>2</RadioButton>
        <RadioButton>3</RadioButton>
        <RadioButton>4</RadioButton>
        <RadioButton>5</RadioButton>
        <Button>Submit</Button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

Form3.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Form Part 3" } }) {
      frontmatter {
        q1
        q2
        q3
      }
    }
  }
`

export default Form3
