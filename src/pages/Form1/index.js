import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  InputBox,
  Label,
  Button,
  Layout,
  StatusBar,
  TextBox,
} from '../../components/'

const Form1 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1 className="f2 pink tc montserrat mb3 mt4">Your Details</h1>
        <StatusBar type="active">1. Basic Details</StatusBar>
        <Link to="/Form2">
          <StatusBar>2. Further Details</StatusBar>
        </Link>
        <Link to="/Form3">
          <StatusBar>3. Your Bio</StatusBar>
        </Link>
        <TextBox>
          Welcome to Audrey, thank you for taking the steps to join our
          community.
        </TextBox>
        <Label>{q1}</Label>
        <InputBox placeholder="Audrey" />
        <Label>{q2}</Label>
        <InputBox placeholder="Readerson" />
        <Label>{q3}</Label>
        <InputBox placeholder="audrey@readwithaudrey.com" />
        <Link to="/Form2" className="no-underline">
          <Button type="register">Continue</Button>
        </Link>
      </form>
      <Link to="/" className="no-underline">
        <TextBox>Go back to the homepage</TextBox>
      </Link>
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
