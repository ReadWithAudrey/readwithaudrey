import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  TextBox,
  Layout,
  Label,
  TextArea,
  Button,
  InputBox,
} from '../../components/'

const ContactUs = ({ data }) => {
  const {
    html,
    frontmatter: { header1, p1 },
  } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">{header1}</h1>
      <TextBox>{p1}</TextBox>
      <form
        method="POST"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thankyou-contact/"
      >
        <input type="hidden" name="bot-field" />
        <Label>Your Name</Label>
        <InputBox
          placeholder="Your Name"
          type="text"
          name="name"
          required="true"
        />
        <Label>Your Email</Label>
        <InputBox
          placeholder="Your Email"
          type="email"
          name="email"
          required="true"
        />
        <Label>Your Message</Label>
        <TextArea
          placeholder="Your Message"
          type="text"
          name="message"
          required="true"
        />
        <Button type="submit" style="register">
          Submit
        </Button>
        <TextBox>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextBox>
      </form>
    </Layout>
  )
}
ContactUs.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
      html
      frontmatter {
        header1
        p1
      }
    }
  }
`

export default ContactUs
