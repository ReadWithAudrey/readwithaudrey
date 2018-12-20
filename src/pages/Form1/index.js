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
  RadioButton,
  FormSection,
  ErrorSpan,
} from '../../components/'

class Form1 extends React.Component {
  state = {
    error: false,
    errorMessage: '',
  }
  handleSubmit = event => {
    const { firstName, secondName, emailAddress, orgCode } = this.props.value
    const backendURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://readwithaudrey-staging.herokuapp.com'

    event.preventDefault()
    axios
      .post(`${backendURL}/formPart1`, {
        firstName,
        secondName,
        emailAddress,
        orgCode,
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
          navigate('/Form2/')
        }
      })
  }
  render() {
    const {
      firstName,
      secondName,
      emailAddress,
      updateForm,
      orgTipsBox,
      orgCode,
      withAnOrg,
      showOrgTips,
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
            <Label className="pt4">
              Are you joining as part of an organisation?
            </Label>
            <RadioButton name="withAnOrg" onChange={updateForm}>
              No
            </RadioButton>
            <RadioButton name="withAnOrg" onChange={updateForm}>
              Yes
            </RadioButton>
            <a
              onClick={showOrgTips}
              className="flex justify-center underline mb2"
            >
              (What does joining with an organisation mean?)
            </a>
            {orgTipsBox && (
              <TextBox className="f">
                When joining Audrey, you have the choice of joining the general
                Audrey community, or joining with an organisation or another
                group to start to build your own smaller community. If you are
                with a community and do not know your code, please contact your
                ambassador. If you would like to set up your own community,
                please click the Get Invloved link at the bottom of the page and
                sign up. Thanks!
              </TextBox>
            )}
            {withAnOrg === 'Yes' && (
              <React.Fragment>
                <Label>Please input the organisation code below</Label>
                <InputBox
                  placeholder="e.g. 000000"
                  onChange={updateForm}
                  name="orgCode"
                  value={orgCode}
                  type="number"
                  required="true"
                />
              </React.Fragment>
            )}
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
