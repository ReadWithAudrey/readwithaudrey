import React from 'react'
import HomepageStyled from './Homepage.style'
import { Link } from 'gatsby'
import { Button } from '../index'
import PropTypes from 'prop-types'
import bookpeople from '../../images/testrwalogo.png'

const Homepage = () => (
  <HomepageStyled>
    <div id="homepage-top" className="flex flex-column items-center justify-center">
      <h1 className="pink tc montserrat">Read Aloud Together</h1>
      <Button><Link to="/Form1/" className="white">Get started</Link></Button>
    </div>
    <img src={ bookpeople } alt="Cartoon of people reading a book"/>
  </HomepageStyled>
)

Homepage.propTypes = {
  siteTitle: PropTypes.string,
}

export default Homepage
