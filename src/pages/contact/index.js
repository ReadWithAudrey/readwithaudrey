import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
      <form method="POST" action="http://localhost:5000/formPart1">
        <Label>Your Name</Label>
        <InputBox placeholder="Your Name" />
        <Label>Your Email</Label>
        <InputBox placeholder="Your Email" />
        <Label>Your Message</Label>
        <TextArea placeholder="Your Message" />
        <Link to="/thankyou" className="no-underline">
          <Button type="register">Submit</Button>
        </Link>
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
