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
  const { q1, q2 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Nearly there…</h1>
      <FormSection>
        <Link to="/form1">
          <StatusBar>1. Basic Details</StatusBar>
        </Link>
        <Link to="/form2">
          <StatusBar>2. Further Details</StatusBar>
        </Link>
        <StatusBar type="active">3. Your Bio</StatusBar>
        <TextBox>
          Please tell us about yourself in up to 100 words. We’ll use your story
          (bio) to match you up with a reading partner. We’ll also use it when
          we introduce you to your reading partner.
        </TextBox>
        <SignupContext.Consumer>
          {({ story, specialRequests, updateForm }) => (
            <form method="POST" action="http://localhost:5000/formPart1">
              <Label>{q1}</Label>
              <TextArea
                placeholder="About You"
                onChange={updateForm}
                name="story"
                value={story}
              />
              <TextBox className="f">
                Tips: The most effective matches tend to happen when members
                share bios that are open and interesting, share a touch of
                quirkiness, and feel light-hearted in spirit. Consider
                describing the things you’re passionate about. It’s helpful to
                share your interests and what you do in your spare time. Try to
                avoid overused phrases e.g. easy-going. Instead, consider what
                makes you special ☺
              </TextBox>
              <Label>{q2}</Label>
              <TextArea
                placeholder="Any special requests for instance"
                onChange={updateForm}
                name="specialRequests"
                value={specialRequests}
              />
              <Link to="/thankyou" className="no-underline">
                <Button type="register">Submit</Button>
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
        q1
        q2
      }
    }
  }
`

export default Form3
