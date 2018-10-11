import React from 'react'
import { Link } from 'gatsby'

import {
  TextBox,
  Layout,
  Label,
  TextArea,
  Button,
  InputBox,
} from '../../components/'

const ContactUs = () => {
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Contact Us</h1>
      <TextBox>
        We would love to hear from you. Get in touch by filling out the form
        below:
      </TextBox>
      <form method="POST" action="http://localhost:5000/formPart1">
        <Label>Your Name</Label>
        <InputBox placeholder="Your Name" />
        <Label>Your Message</Label>
        <TextArea placeholder="Your Message" />
        <Link to="/thankyou" className="no-underline">
          <Button type="register">Submit</Button>
        </Link>
      </form>
    </Layout>
  )
}

export default ContactUs
