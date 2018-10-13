import React from 'react'
import HeaderStyled from './Header.style'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import openbook from '../../images/open-book.svg'
import { Navigation } from '../index'

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div id="header-left" className="flex items-center">
      <Link to="/">
        <img src={openbook} alt="book icon" className="h2 ph2" />
      </Link>
      <Link to="/">{siteTitle}</Link>
    </div>
    <Navigation />
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
