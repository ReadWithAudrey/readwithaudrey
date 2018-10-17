import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { SignupContext } from '../../contexts/SignupContext'

import {
  Label,
  Button,
  StatusBar,
  TextArea,
  TextBox,
  Layout,
  FormSection,
} from '../../components/'

const Form3 = ({ data }) => {
  const {
    heading,
    description,
    q1,
    q1Placeholder,
    q2,
    q2Placeholder,
    tips,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">{heading}</h1>
      <FormSection>
        <Link to="/form1">
          <StatusBar>1. Basic Details</StatusBar>
        </Link>
        <Link to="/form2">
          <StatusBar>2. Further Details</StatusBar>
        </Link>
        <StatusBar type="active">3. Your Bio</StatusBar>
        <TextBox>{description}</TextBox>
        <SignupContext.Consumer>
          {({ story, specialRequests, updateForm }) => (
            <form method="POST" action="http://localhost:5000/formPart1">
              <Label>{q1}</Label>
              <TextArea
                placeholder={q1Placeholder}
                onChange={updateForm}
                name="story"
                value={story}
              />
              <TextBox className="f">{tips}</TextBox>
              <Label>{q2}</Label>
              <TextArea
                placeholder={q2Placeholder}
                onChange={updateForm}
                name="specialRequests"
                value={specialRequests}
              />
              <Link to="/thankyou" className="no-underline">
                <Button style="register">Submit</Button>
              </Link>
            </form>
          )}
        </SignupContext.Consumer>
      </FormSection>
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
        heading
        description
        q1
        q1Placeholder
        tips
        q2
        q2Placeholder
      }
    }
  }
`

export default Form3
