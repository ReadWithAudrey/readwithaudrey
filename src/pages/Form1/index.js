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
} from '../../components/'

const Form1 = ({ data }) => {
  const { q1, q2, q3 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Welcome to Audrey.</h1>
      <FormSection>
        <StatusBar type="active">1. Contact Info</StatusBar>
        <StatusBar>
          <Link to="/Form2">2. Further Details</Link>
        </StatusBar>
        <StatusBar>
          <Link to="/Form3">3. Your Story</Link>
        </StatusBar>
        <TextBox>
          You&apos;re warmly invited to join our community. Let’s get the ball
          rolling. Please complete the questions below.
        </TextBox>
        <SignupContext.Consumer>
          {({ firstName, secondName, emailAddress, updateForm }) => (
            <form method="POST" action="http://localhost:5000/formPart1">
              <Label>{q1}</Label>
              <InputBox
                placeholder="Audrey"
                onChange={updateForm}
                name="firstName"
                value={firstName}
              />
              <Label>{q2}</Label>
              <InputBox
                placeholder="Readerson"
                onChange={updateForm}
                name="secondName"
                value={secondName}
              />
              <Label>{q3}</Label>
              <InputBox
                placeholder="audrey@readwithaudrey.comn"
                onChange={updateForm}
                name="emailAddress"
                value={emailAddress}
              />
              <TextBox>
                We&apos;ll use this to introduce you to your reading partner
              </TextBox>
              <Link to="/Form2" className="no-underline">
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
        q1
        q2
        q3
      }
    }
  }
`

export default Form1
