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
      className="flex flex-column items-center justify-around-ns justify-start w-100 absolute-ns top-1 vh-100"
    >
      <h1 className="pink tc f1 montserrat lh-title pt4 pt3-ns f-subheadline-ns">
        Read Aloud
        <br /> Together
      </h1>
      <h2 className="green tc f4 montserrat m0 f3-ns">
        Let&apos;s find you a reading partner
      </h2>
      <Link to="/Form1/" className="white no-underline w-100">
        <Button style="register" className="mt3">
          Get started
        </Button>
      </Link>
    </div>
    <img src={bookpeople} className="mt7 w-auto img-no-margin" alt="Cartoon of people reading a book" />
  </Welcome>
)

WelcomeScreen.propTypes = {
  siteTitle: PropTypes.string,
}

export default WelcomeScreen
