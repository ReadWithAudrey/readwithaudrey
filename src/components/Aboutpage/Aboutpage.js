import React from 'react'
import AboutpageStyled from './Aboutpage.style'
import PropTypes from 'prop-types'

const Aboutpage = () => (
  <AboutpageStyled>
      <h1 className="f1 pink tc">Read Aloud Together</h1>
  </AboutpageStyled>
)

Aboutpage.propTypes = {
  siteTitle: PropTypes.string,
}

export default Aboutpage