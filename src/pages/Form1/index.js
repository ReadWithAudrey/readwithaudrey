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
  state = {
    error: false,
    errorMessage: '',
    disabled: false,
  }
  handleSubmit = event => {
    const { firstName, secondName, emailAddress } = this.props.value
    const backendURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://readwithaudrey.herokuapp.com'
    event.preventDefault()
    axios
      .post(`${backendURL}/formPart1`, {
        firstName,
        secondName,
        emailAddress,
      })
      .then(res => {
        if (res.data === 'email exists') {
          this.setState({
            error: true,
            errorMessage:
              'Sorry, a user with that e-mail address already exists, please chose another e-mail or check your inbox',
          })
        } else if (res.data === 'server error') {
          this.setState({
            error: true,
            errorMessage:
              'Sorry, a server error has occured. Please try again.',
          })
        } else {
          this.setState({
            disabled: true,
          })
          navigate('/Form2/')
        }
      })
  }
  render() {
    const { firstName, secondName, emailAddress, updateForm } = this.props.value
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
        <h1 className="f2 pink tc montserrat mb3 mt4 mb4-ns mt5-ns">
          {heading}
        </h1>
        <FormSection>
          <StatusBar type="active">1. Contact Details</StatusBar>
          <StatusBar>2. Further Details</StatusBar>
          <StatusBar>3. Your Story</StatusBar>
          <TextBox>{description}</TextBox>
          {this.state.error && <ErrorSpan>{this.state.errorMessage}</ErrorSpan>}
          <form onSubmit={this.handleSubmit}>
            <Label>{q1}</Label>
            <InputBox
              placeholder={q1Placeholder}
              onChange={updateForm}
              name="firstName"
              value={firstName}
              type="text"
              required="true"
            />
            <Label>{q2}</Label>
            <InputBox
              placeholder={q2Placeholder}
              onChange={updateForm}
              name="secondName"
              value={secondName}
              type="text"
              required="true"
            />
            <Label>{q3}</Label>
            <InputBox
              placeholder={q3Placeholder}
              onChange={updateForm}
              name="emailAddress"
              value={emailAddress}
              type="email"
              required="true"
            />
            <TextBox>{finalText}</TextBox>
            <Button style="register" disabled={this.state.disabled}>
              Continue
            </Button>
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
