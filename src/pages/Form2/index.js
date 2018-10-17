import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { SignupContext } from '../../contexts/SignupContext'

import {
  InputBox,
  Label,
  Button,
  StatusBar,
  DropDownBox,
  RadioButton,
  TextBox,
  Layout,
  FormSection,
} from '../../components/'

const Form2 = ({ data }) => {
  const {
    heading,
    description,
    q1,
    q1Placeholder,
    q2,
    q2Placeholder,
    q3,
    readlisten1,
    readlisten2,
    readlisten3,
    q4,
    booktype1,
    booktype2,
    booktype3,
    q5,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">{heading}</h1>
      <FormSection>
        <Link to="/form1/">
          <StatusBar>1. Contact Details</StatusBar>
        </Link>
        <StatusBar type="active">2. Further Details</StatusBar>
        <Link to="/form3/">
          <StatusBar>3. Your Story</StatusBar>
        </Link>
        <TextBox>{description}</TextBox>
        <SignupContext.Consumer>
          {({ gender, age, readlisten, updateForm }) => (
            <form method="POST" action="http://localhost:5000/formPart1">
              <Label>{q1}</Label>
              <InputBox
                placeholder={q1Placeholder}
                onChange={updateForm}
                name="gender"
                value={gender}
              />
              <Label>{q2}</Label>
              <InputBox
                placeholder={q2Placeholder}
                onChange={updateForm}
                name="age"
                value={age}
              />
              <Label>{q3}</Label>
              <DropDownBox onChange={updateForm} name="timezone" />
              <Label>{q4}</Label>
              <RadioButton
                name="readlisten"
                onChange={updateForm}
                value={readlisten}
              >
                {readlisten1}
              </RadioButton>
              <RadioButton
                name="readlisten"
                onChange={updateForm}
                value={readlisten}
              >
                {readlisten2}
              </RadioButton>
              <RadioButton
                name="readlisten"
                onChange={updateForm}
                value={readlisten}
              >
                {readlisten3}
              </RadioButton>
              <Label>{q5}</Label>
              <RadioButton name="booktype" onChange={updateForm}>
                {booktype1}
              </RadioButton>
              <RadioButton name="booktype" onChange={updateForm}>
                {booktype2}
              </RadioButton>
              <RadioButton name="booktype" onChange={updateForm}>
                {booktype3}
              </RadioButton>
              <Link to="/form3" className="no-underline">
                <Button type="register">Continue</Button>
              </Link>
            </form>
          )}
        </SignupContext.Consumer>
      </FormSection>
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
        heading
        description
        q1
        q1Placeholder
        q2
        q2Placeholder
        q3
        readlisten1
        readlisten2
        readlisten3
        q4
        booktype1
        booktype2
        booktype3
        q5
      }
    }
  }
`

export default Form2
