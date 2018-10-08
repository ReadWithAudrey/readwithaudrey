import React from 'react'
import HeaderStyled from './Header.style'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => <HeaderStyled>{siteTitle}</HeaderStyled>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
