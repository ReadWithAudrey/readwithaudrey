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
      <h1 className="f3 pink tc montserrat mb3">Contact Us</h1>
      <TextBox>
        We would love to hear from you. Get in touch by filling out the form
        below:
      </TextBox>
      <form method="POST" action="http://localhost:5000/formPart1">
        <Label>Your Name</Label>
        <InputBox placeholder="Your Name" />
        <Label>Your Message</Label>
        <TextArea placeholder="Your Message" />
        <Link to="/thankyou">
          <Button type="register">Submit</Button>
        </Link>
      </form>
    </Layout>
  )
}

export default ContactUs
