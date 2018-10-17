import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { SignupContext } from '../../contexts/SignupContext'

import {
  InputBox,
  Label,
  Button,
  Layout,
  StatusBar,
  TextBox,
  FormSection,
  ErrorSpan,
} from '../../components/'

const Form1 = ({ data }) => {
  const {
    heading,
    description,
    q1,
    q2,
    q3,
    q1Placeholder,
    q2Placeholder,
    q3Placeholder,
    finalText,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">{heading}</h1>
      <FormSection>
        <StatusBar type="active">1. Contact Info</StatusBar>
        <Link to="/Form2">
          <StatusBar>2. Further Details</StatusBar>
        </Link>
        <Link to="/Form3">
          <StatusBar>3. Your Story</StatusBar>
        </Link>
        <TextBox>{description}</TextBox>
        <SignupContext.Consumer>
          {({ firstName, secondName, emailAddress, nameErrorSpan, nameError, surnameErrorSpan, surnameError, emailErrorSpan, emailError, updateForm, handleNext }) => (
            <form method="POST" action="http://localhost:5000/formPart1">
              <Label>{q1}</Label>
              <ErrorSpan type={nameErrorSpan}>{nameError}</ErrorSpan>
              <InputBox
                placeholder={q1Placeholder}
                onChange={updateForm}
                name="firstName"
                value={firstName}
                required
              />
              <Label>{q2}</Label>
              <ErrorSpan type={surnameErrorSpan}>{surnameError}</ErrorSpan>
              <InputBox
                placeholder={q2Placeholder}
                onChange={updateForm}
                name="secondName"
                value={secondName}
                required
              />
              <Label>{q3}</Label>
              <ErrorSpan type={emailErrorSpan}>{emailError}</ErrorSpan>
              <InputBox
                placeholder={q3Placeholder}
                onChange={updateForm}
                name="emailAddress"
                value={emailAddress}
                required
              />
              <TextBox>{finalText}</TextBox>
              <Link to="/Form2" className="no-underline" onClick={handleNext}>
                <Button type="register">Continue</Button>
              </Link>
            </form>
          )}
        </SignupContext.Consumer>
      </FormSection>
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
        heading
        description
        finalText
        q1
        q2
        q3
        q1Placeholder
        q2Placeholder
        q3Placeholder
      }
    }
  }
`

export default Form1
