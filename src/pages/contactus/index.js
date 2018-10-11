import React from 'react'
import { Link } from 'gatsby'

import { TextBox, Layout, Label, TextArea, Button, Input } from '../components/'

const ContactUs = () => {
  return (
    <Layout>
      <h1 className="f3 pink tc montserrat mb3">Contact Us</h1>
      <TextBox>
        We would love to hear from you. Get in touch either by filling out the
        contact form below or contacting us at{' '}
        <a href="mailto:readwithaudrey@gmail.com">readwithaudrey@gmail.com</a>
      </TextBox>
      <form method="POST" action="http://localhost:5000/formPart1">
        <Label>Your Name</Label>
        <Input placeholder="Your Name" />
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
