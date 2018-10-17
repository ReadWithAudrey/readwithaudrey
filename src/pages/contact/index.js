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
      <h1 className="f2 pink tc montserrat mb3 mt4">How can we help you?</h1>
      <TextBox>
        We would love to hear from you. Your questions and comments are
        important to us. The best way to reach us is in writing. Please fill out
        the contact form below:
      </TextBox>
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
          Want to get involved and help us do amazing things? We’d be delighted
          to chat.
        </TextBox>
        <TextBox>
          Fancy a coffee? We float between independent bookshops, coffee houses
          and libraries in Kings Cross, London, England – around the corner from
          Platform 9¾.
        </TextBox>
        <TextBox>
          Oh…. almost forgot…. if you’ve got a great book recommendation please
          please share it with us!
        </TextBox>
      </form>
    </Layout>
  )
}

export default ContactUs
