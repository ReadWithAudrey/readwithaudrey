import React from 'react'
import { Link } from 'gatsby'
import facebook from '../../images/facebook.png'
import email from '../../images/email.png'
import twitter from '../../images/twitter.png'

import { TextBox, Layout } from '../../components/'

const ThankYou = () => {
  return (
    <Layout>
      <h1 className="f3 pink tc montserrat mb3">Thank You</h1>
      <TextBox>
        Thank you! We’ve received your registration and we will begin to pair
        you up a reading partner we think you&apos;ll connect well with shortly.
      </TextBox>
      <TextBox>
        We&apos;ll email you to introduce you and your reading partner once this
        is complete.
      </TextBox>
      <TextBox>
        If you have any questions in the meantime, please do not hesitate to
        contact us at{' '}
        <a href="mailto:readwithaudrey@gmail.com">readwithaudrey@gmail.com</a>
      </TextBox>
      <h2 className="f3 pink tc montserrat mb3">Help Spread The Word</h2>
      <TextBox>
        Why not share the story of Audrey and help us spread the word?
      </TextBox>
      <h3 className="f5 pink tc montserrat mb3">Share On</h3>
      <img src={facebook} alt="Facebook" className="fl" />
      <img src={twitter} alt="Twitter" className="fl" />
      <img src={email} alt="Email" className="fl" />
      <TextBox>
        <Link to="/">Go back to the homepage</Link>
      </TextBox>
    </Layout>
  )
}

export default ThankYou
