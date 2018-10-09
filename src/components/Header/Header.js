import React from 'react'
import HeaderStyled from './Header.style'
import { Button } from '../index'
import PropTypes from 'prop-types'
import openbook from '../../images/open-book.svg'

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div id="header-left" className="w-third flex items-center justify-around f4">
      <img src={ openbook } alt="book icon" className="h2"/>
      {siteTitle}
    </div>
    <Button type="header">Join Us</Button>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
