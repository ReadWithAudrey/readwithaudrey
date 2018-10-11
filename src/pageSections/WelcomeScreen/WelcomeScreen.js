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
      className="flex flex-column items-center justify-around w-100"
    >
      <h1 className="pink tc f1 montserrat lh-title">
        Read
        <br /> Aloud
        <br /> Together
      </h1>
      <Link to="/Form1/" className="white">
        <Button>Get started</Button>
      </Link>
    </div>
    <img src={bookpeople} alt="Cartoon of people reading a book" />
  </Welcome>
)

WelcomeScreen.propTypes = {
  siteTitle: PropTypes.string,
}

export default WelcomeScreen
