import React from 'react'
import HeaderStyled from './Header.style'
import PropTypes from 'prop-types'
import openbook from '../../images/open-book.svg'

const Header = ({ siteTitle }) => (
  <HeaderStyled>
      <img src={ openbook } alt="book icon" className="h2 ph2"/>
      {siteTitle}
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
