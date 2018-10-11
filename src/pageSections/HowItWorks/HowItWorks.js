import React from 'react'
import { TextBox } from '../../components'
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
      <TextBox>
        Tell us a little bit about yourself & how you’d like to use Audrey
      </TextBox>
    </div>
    <div id="step-2-connect">
      <h3 className="f3 green tc">Connect</h3>
      <img src={pair} alt="Icon of a pair of people" className="small-icon" />
      <TextBox>
        We will pair you with someone we think you will connect well with and
        help to facilitate your first reading session
      </TextBox>
    </div>
    <div id="step-3-read">
      <h3 className="f3 green tc">Read</h3>
      <img src={book} alt="Icon of a man" className="small-icon" />
      <TextBox>
        Each reading takes roughly 10 minutes. Afterwards you’re welcome to
        discuss the experience
      </TextBox>
    </div>
  </StyledHowItWorks>
)

HowItWorks.propTypes = {
  siteTitle: PropTypes.string,
}

export default HowItWorks
