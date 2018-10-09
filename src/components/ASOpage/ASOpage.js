import React from 'react'
import ASOpageStyled from './ASOpage.style'
import PropTypes from 'prop-types'

const ASOpage = () => (
  <ASOpageStyled>
    <h2 className="f2 pink tc">As seen on:</h2>
  </ASOpageStyled>
)

ASOpage.propTypes = {
  siteTitle: PropTypes.string,
}

export default ASOpage