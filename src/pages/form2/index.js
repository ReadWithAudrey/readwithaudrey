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
  ErrorSpan,
} from '../../components/'

class Form2 extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    navigate('/form3/')
  }
  render() {
    const {
      heading,
      description,
      q1,
      q1Placeholder,
      q2,
      q3,
<<<<<<< HEAD
      q4,
=======
      readlisten1,
      readlisten2,
      readlisten3,
      q4,
      booktype1,
      booktype2,
      booktype3,
>>>>>>> master
      q5,
    } = this.props.data.markdownRemark.frontmatter
    const {
      gender,
      readlisten,
      bookErrorSpan,
      bookError,
      roleErrorSpan,
      roleError,
      updateForm,
    } = this.props.value
    return (
      <Layout>
        <h1 className="f2 pink tc montserrat mb3 mt4">{heading}</h1>
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
            <ErrorSpan type={roleErrorSpan}>{roleError}</ErrorSpan>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
<<<<<<< HEAD
              Read
=======
              {readlisten1}
>>>>>>> master
            </RadioButton>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
<<<<<<< HEAD
              Listen
=======
              {readlisten2}
>>>>>>> master
            </RadioButton>
            <RadioButton
              name="readlisten"
              onChange={updateForm}
              value={readlisten}
            >
<<<<<<< HEAD
              Both
=======
              {readlisten3}
>>>>>>> master
            </RadioButton>
            <Label>{q5}</Label>
            <ErrorSpan type={bookErrorSpan}>{bookError}</ErrorSpan>
            <RadioButton name="booktype" onChange={updateForm}>
<<<<<<< HEAD
              Fiction
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              Non-fiction
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              Don&#39;t Mind
=======
              {booktype1}
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              {booktype2}
            </RadioButton>
            <RadioButton name="booktype" onChange={updateForm}>
              {booktype3}
>>>>>>> master
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
        q3
<<<<<<< HEAD
        q4
=======
        readlisten1
        readlisten2
        readlisten3
        q4
        booktype1
        booktype2
        booktype3
>>>>>>> master
        q5
      }
    }
  }
`

export default withSignupContext(Form2)
