import React from 'react'
import HeaderStyled from './Header.style'
import { Button } from '../index'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    {siteTitle}
    <Button type="header">JOIN US</Button>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
