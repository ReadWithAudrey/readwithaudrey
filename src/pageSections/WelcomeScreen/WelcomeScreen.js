import React from 'react'
import Welcome from './WelcomeScreen.style'
import { Link } from 'gatsby'
import { Button } from '../../components/'
import PropTypes from 'prop-types'
import bookpeople from '../../images/testrwalogo.png'

const WelcomeScreen = () => (
  <Welcome>
    <div
      id="homepage-top"
      className="flex flex-column items-center justify-around-ns justify-start w-100 absolute top-0 z-999"
    >
      <h1
        className="tc f1 montserrat lh-title pt1 f-subheadline-ns mb5"
        style={{ color: '#fd8181' }}
      >
        Read Aloud
        <br /> Together
      </h1>
      <Link to="/Form1/" className="white no-underline">
        <Button style="register" className="mt3">
          Get started
        </Button>
      </Link>
      <h2
        className=" tc f4 montserrat m0 f3-ns mt4 pt0"
        style={{ color: '#51e0b7' }}
      >
        Let&apos;s find you a reading partner
      </h2>
    </div>
    <img
      src={bookpeople}
      className="mt7 w-auto img-no-margin absolute static-ns bottom-0 z-0 o-50"
      alt="Cartoon of people reading a book"
    />
  </Welcome>
)

WelcomeScreen.propTypes = {
  siteTitle: PropTypes.string,
}

export default WelcomeScreen
