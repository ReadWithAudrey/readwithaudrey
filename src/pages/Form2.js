import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import {
  InputBox,
  Label,
  Button,
  StatusBar,
  DropDownBox,
  RadioButton,
} from '../components/'

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
        <p className="montserrat f6 pv2">
          In order to find the best reading partner for you, we need a little
          bit more information
        </p>
        <Label>{q1}</Label>
        <RadioButton>Male</RadioButton>
        <RadioButton>Female</RadioButton>
        <RadioButton>Prefer not to say</RadioButton>
        <Label>{q2}</Label>
        <InputBox placeholder="Age" />
        <Label>{q3}</Label>
        <InputBox placeholder="Country" /> <DropDownBox />
        <Label>{q4}</Label>
        <RadioButton>Read</RadioButton>
        <RadioButton>Listen</RadioButton>
        <RadioButton>Both</RadioButton>
        <Label>{q5}</Label>
        Please rank the the options below in order - favourite 1st
        <InputBox placeholder="Email Adress" />
        <InputBox placeholder="Email Adress" />
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
