import React from 'react'
import StyledHowItWorks from './HowItWorks.style'
import man from '../../images/manicon.svg'
import pair from '../../images/pairicon.png'
import book from '../../images/open-book-black.svg'
import PropTypes from 'prop-types'

const HowItWorks = () => (
  <StyledHowItWorks>
    <div id="how-title">
      <h2 className="f2 pink tc">How it works</h2>
    </div>
    <div id="step-1-register">
      <h3 className="f3 green tc">Register</h3>
      <img src={man} alt="Icon of a man" className="small-icon" />
    </div>
    <div id="step-2-connect">
      <h3 className="f3 green tc">Connect</h3>
      <img src={pair} alt="Icon of a pair of people" className="small-icon" />
    </div>
    <div id="step-3-read">
      <h3 className="f3 green tc">Read</h3>
      <img src={book} alt="Icon of a man" className="small-icon" />
    </div>
  </StyledHowItWorks>
)

HowItWorks.propTypes = {
  siteTitle: PropTypes.string,
}

export default HowItWorks
