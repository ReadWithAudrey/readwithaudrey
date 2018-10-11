import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  Label,
  Button,
  StatusBar,
  RadioButton,
  TextArea,
  TextBox,
  Layout,
} from '../../components/'

const Form3 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1 className="f2 pink tc montserrat mb3 mt5">Your Bio</h1>
        <StatusBar>
          <Link to="/Form1">1. Basic Details</Link>
        </StatusBar>
        <StatusBar>
          <Link to="/Form2">2. Further Details</Link>
        </StatusBar>
        <StatusBar type="active">3. Your Bio</StatusBar>
        <TextBox>
          We will use your bio to find you a reading partner. This is also the
          wording we’ll use to introduce you to your reading partner over email.
        </TextBox>
        <Label>{q1}</Label>
        <TextArea placeholder="About You" />
        <Label>{q2}</Label>
        <TextArea placeholder="Special Requirements" />
        <Label>{q3}</Label>
        <RadioButton>1 (Like the idea)</RadioButton>
        <RadioButton>2</RadioButton>
        <RadioButton>3 (Don&apos;t mind) </RadioButton>
        <RadioButton>4</RadioButton>
        <RadioButton>5 (Really Don&apos;t Like)</RadioButton>
        <Link to="/thankyou" className="no-underline">
          <Button type="register">Submit</Button>
        </Link>
      </form>
      <TextBox>
        <Link to="/" className="no-underline">Go back to the homepage</Link>
      </TextBox>
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
