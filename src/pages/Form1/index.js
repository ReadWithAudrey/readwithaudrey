/* eslint-disable */

import axios from 'axios'
import React from 'react'
import { graphql, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { withSignupContext } from '../../contexts/contextWrapper'

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

class Form1 extends React.Component {
  handleSubmit = event => {
    const { firstName, secondName, emailAddress } = this.props.value
    event.preventDefault()
    axios
      .post(`http://localhost:5000/formPart1`, {
        firstName,
        secondName,
        emailAddress,
      })
      .then(res => {
        console.log(res)
        navigate('/form2/')
      })
  }
  render() {
    const {
      firstName,
      secondName,
      emailAddress,
      updateForm,
      nameErrorSpan,
      nameError,
      surnameError,
      surnameErrorSpan,
      emailError,
      emailErrorSpan,
    } = this.props.value
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
    } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <h1 className="f2 pink tc montserrat mb3 mt4">{heading}</h1>
        <FormSection>
          <StatusBar type="active">1. Contact Details</StatusBar>
          <StatusBar>2. Further Details</StatusBar>
          <StatusBar>3. Your Story</StatusBar>
          <TextBox>{description}</TextBox>
          <form onSubmit={this.handleSubmit}>
            <Label>{q1}</Label>
            <ErrorSpan type={nameErrorSpan}>{nameError}</ErrorSpan>
            <InputBox
              placeholder={q1Placeholder}
              onChange={updateForm}
              name="firstName"
              value={firstName}
            />
            <Label>{q2}</Label>
            <ErrorSpan type={surnameErrorSpan}>{surnameError}</ErrorSpan>
            <InputBox
              placeholder={q2Placeholder}
              onChange={updateForm}
              name="secondName"
              value={secondName}
            />
            <Label>{q3}</Label>
            <ErrorSpan type={emailErrorSpan}>{emailError}</ErrorSpan>
            <InputBox
              placeholder={q3Placeholder}
              onChange={updateForm}
              name="emailAddress"
              value={emailAddress}
            />
            <TextBox>{finalText}</TextBox>
            <Button style="register">Continue</Button>
          </form>
        </FormSection>
      </Layout>
    )
  }
}

Form1.propTypes = {
  data: PropTypes.object,
  value: PropTypes.object,
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

export default withSignupContext(Form1)
