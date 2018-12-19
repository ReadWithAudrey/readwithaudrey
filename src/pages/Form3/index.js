import React from 'react'
import axios from 'axios'
import { graphql, navigate, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { withSignupContext } from '../../contexts/contextWrapper'

import {
  Label,
  Button,
  StatusBar,
  TextArea,
  TextBox,
  Layout,
  FormSection,
  ErrorSpan,
} from '../../components/'

class Form3 extends React.Component {
  state = {
    error: false,
    errorMessage: '',
  }
  handleSubmit = event => {
    const {
      firstName,
      secondName,
      emailAddress,
      orgCode,
      gender,
      age,
      readlisten,
      timezone,
      booktype,
      story,
      specialRequests,
    } = this.props.value
    const backendURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://readwithaudrey-staging.herokuapp.com'
    event.preventDefault()
    axios
      .post(`${backendURL}/formPart3`, {
        firstName,
        secondName,
        emailAddress,
        orgCode,
        gender,
        timezone,
        age,
        readlisten,
        booktype,
        story,
        specialRequests,
      })
      .then(res => {
        if (res.data === 'server error') {
          this.setState({
            error: true,
            errorMessage:
              'Sorry, a server error has occured. Please try again.',
          })
        } else {
          navigate('/thankyou/')
        }
      })
  }
  render() {
    const {
      story,
      specialRequests,
      updateForm,
      storyTipsBox,
      showTips,
    } = this.props.value
    const {
      heading,
      description,
      q1,
      q1Placeholder,
      q2,
      q2Placeholder,
      tips,
    } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <h1 className="f2 pink tc montserrat mb3 mt4 mb4-ns mt5-ns">
          {heading}
        </h1>
        <FormSection>
          <StatusBar>
            <Link to="/Form1">1. Contact Details</Link>
          </StatusBar>
          <StatusBar>
            <Link to="/Form2">2. Further Details</Link>
          </StatusBar>
          <StatusBar type="active">3. Your Bio</StatusBar>
          <TextBox>{description}</TextBox>
          {this.state.error && <ErrorSpan>{this.state.errorMessage}</ErrorSpan>}
          <form onSubmit={this.handleSubmit}>
            <Label>{q1}</Label>
            <TextArea
              placeholder={q1Placeholder}
              onChange={updateForm}
              name="story"
              value={story}
              required
            />

            <a onClick={showTips} className="flex justify-center underline mb2">
              (Need tips?)
            </a>
            {storyTipsBox && <TextBox className="f">{tips}</TextBox>}
            <Label>{q2}</Label>
            <TextArea
              placeholder={q2Placeholder}
              onChange={updateForm}
              name="specialRequests"
              value={specialRequests}
            />
            <Button style="register">Submit</Button>
          </form>
        </FormSection>
      </Layout>
    )
  }
}

Form3.propTypes = {
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

export default withSignupContext(Form3)
