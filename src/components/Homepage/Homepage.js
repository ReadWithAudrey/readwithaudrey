import React from 'react'
import HomepageStyled from './Homepage.style'
import { Link } from 'gatsby'
import { Button } from '../index'
import PropTypes from 'prop-types'
import bookpeople from '../../images/bookpeople.png'

const Homepage = () => (
  <HomepageStyled>
      <h1 className="f1 green tc">Read Aloud Together</h1>
      <Button><Link to="/Form1/" className="white">Join us</Link></Button>
      <img src={ bookpeople } alt="Cartoon of people reading a book"/>
  </HomepageStyled>
)

Homepage.propTypes = {
  siteTitle: PropTypes.string,
}

export default Homepage
