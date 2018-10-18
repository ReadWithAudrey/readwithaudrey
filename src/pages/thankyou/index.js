import React from 'react'
import { Link } from 'gatsby'
import facebook from '../../images/facebook.svg'
import email from '../../images/gmail.svg'
import twitter from '../../images/twitter.svg'

import { TextBox, Layout } from '../../components/'

const ThankYou = () => {
  return (
    <Layout>
      <h1 className="f3 pink tc montserrat mt5 mb4">Great… you’re in… Welcome!</h1>
      <TextBox>
        Thank you for completing the sign up. That’s the hard part done. Welcome
        to our community. We’re delighted to have you on board!
      </TextBox>
      <TextBox>
        We’ve received your responses and now we’ll begin the process of pairing
        you up with a reading partner.
      </TextBox>
      <TextBox>
        Expect to receive an email from us in the next day or two introducing
        you to your reading partner
      </TextBox>
      <TextBox>
        If you have any questions in the meantime, please <Link to="/contact">contact us</Link>
      </TextBox>
      <h2 className="f3 pink tc montserrat mt5 mb4">Help Spread The Word</h2>
      <TextBox>
        Why not share the story of Audrey and help us spread the word?
      </TextBox>
      <div id="social-logos" className="flex justify-around w-100 flex-ns ph6-ns pv4">
        <img src={facebook} alt="Facebook" className="small-icon mw-25 h3-ns" />
        <img src={twitter} alt="Twitter" className="small-icon mw-25 h3-ns" />
        <img src={email} alt="Email" className="small-icon mw-25 h3-ns" />
      </div>
      <TextBox>Have a great day!</TextBox>
      <TextBox>Rob and the Audrey team</TextBox>
      <Link to="/">
        <TextBox>Go back to the homepage</TextBox>
      </Link>
    </Layout>
  )
}

export default ThankYou
