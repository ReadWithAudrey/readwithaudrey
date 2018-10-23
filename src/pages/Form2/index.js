import React from 'react'
import { graphql, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { withSignupContext } from '../../contexts/contextWrapper'

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

class Form2 extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    navigate('/Form3/')
  }
  render() {
    const {
      heading,
      description,
      q1,
      q1Placeholder,
      readListen1,
      readListen2,
      readListen3,
      q2,
      q3,
      q4,
      q5,
      bookType1,
      bookType2,
      bookType3
    } = this.props.data.markdownRemark.frontmatter
    const { gender, readlisten, updateForm } = this.props.value
    return (
      <Layout>
        <h1 className="f2 pink tc montserrat mb3 mt4 mb4-ns mt5-ns">{heading}</h1>
        <FormSection>
          <StatusBar>1. Contact Details</StatusBar>
          <StatusBar type="active">2. Further Details</StatusBar>
          <StatusBar>3. Your Story</StatusBar>
          <TextBox>{description}</TextBox>
          <form onSubmit={this.handleSubmit}>
            <Label>{q1}</Label>
            <InputBox
              placeholder={q1Placeholder}
              onChange={updateForm}
              name="gender"
              value={gender}
              type="text"
            />
            <Label>{q2}</Label>
            <DropDownBox onChange={updateForm} type="age" name="age" />
            <Label>{q3}</Label>
            <DropDownBox
              onChange={updateForm}
              type="timezone"
              name="timezone"
            />
            <Label>{q4}</Label>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
              {readListen1}
            </RadioButton>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
              {readListen2}
            </RadioButton>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
              {readListen3}
            </RadioButton>
            <Label>{q5}</Label>
            <RadioButton name="booktype" onChange={updateForm}>
              {bookType1}
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              {bookType2}
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              {bookType3}
            </RadioButton>
            <Button style="register">Continue</Button>
          </form>
        </FormSection>
      </Layout>
    )
  }
}

Form2.propTypes = {
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
    markdownRemark(frontmatter: { title: { eq: "Form Part 2" } }) {
      frontmatter {
        heading
        description
        q1
        q1Placeholder
        q2
        q2Placeholder
        readListen1
        readListen2
        readListen3
        q3
        q4
        q5
        bookType1
        bookType2
        bookType3
      }
    }
  }
`

export default withSignupContext(Form2)
