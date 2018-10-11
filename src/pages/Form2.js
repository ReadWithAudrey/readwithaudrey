import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  InputBox,
  Label,
  Button,
  StatusBar,
  DropDownBox,
  RankingBox,
  RadioButton,
  TextBox,
  Layout,
} from '../components/'

const Form2 = ({ data }) => {
  const { q1, q2, q3, q4, q5, q6 } = data.markdownRemark.frontmatter
  return (
    <Layout className="form-padding">
      <form method="POST" action="http://localhost:5000/formPart1">
        <h1 className="f3 pink tc montserrat mb3">Further Details</h1>
        <StatusBar>
          <Link to="/Form1">1. Basic Details</Link>
        </StatusBar>
        <StatusBar type="active">2. Further Details</StatusBar>
        <StatusBar>
          <Link to="/Form3">3. Your Bio</Link>
        </StatusBar>
        <TextBox>
          In order to find the best reading partner for you, we need a little
          bit more information
        </TextBox>
        <Label>{q1}</Label>
        <RadioButton>Male</RadioButton>
        <RadioButton>Female</RadioButton>
        <RadioButton>Prefer not to say</RadioButton>
        <Label>{q2}</Label>
        <InputBox placeholder="Age" />
        <Label>{q3}</Label>
        <InputBox placeholder="Country" />
        <Label>{q4}</Label>
        <DropDownBox />
        <Label>{q5}</Label>
        <RadioButton>Read</RadioButton>
        <RadioButton>Listen</RadioButton>
        <RadioButton>Both</RadioButton>
        <Label>{q6}</Label>
        <TextBox>
          Please rank the the options below in order - favourite 1st
        </TextBox>
        <RankingBox placeholder="1">Several fantastic short stories</RankingBox>
        <RankingBox placeholder="2">
          A wonderful novella (short novel)
        </RankingBox>
        <RankingBox placeholder="3">
          A fascinating work of non-fiction
        </RankingBox>
        <Link to="/Form3">
          <Button type="register">Continue</Button>
        </Link>
      </form>
      <TextBox>
        <Link to="/">Go back to the homepage</Link>
      </TextBox>
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
        q6
      }
    }
  }
`

export default Form2
