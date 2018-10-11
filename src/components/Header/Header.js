import React from 'react'
import HeaderStyled from './Header.style'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import openbook from '../../images/open-book.svg'
import { Button } from '../index'

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div id="header-left" className="flex items-center">
      <img src={openbook} alt="book icon" className="h2 ph2" />
      <Link to="/">{siteTitle}</Link>
    </div>
    <Link to="/Form1/" className="w-third">
      <Button type="header">Join Us</Button>
    </Link>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
