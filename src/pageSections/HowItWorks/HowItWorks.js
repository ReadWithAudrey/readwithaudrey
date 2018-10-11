import React from 'react'
import { TextBox } from '../../components'
import StyledHowItWorks from './HowItWorks.style'
import man from '../../images/manicon.svg'
import pair from '../../images/pairicon.png'
import book from '../../images/open-book-black.svg'
import PropTypes from 'prop-types'

const HowItWorks = () => (
  <StyledHowItWorks>
    <div id="step-1-register">
      <h2 className="f2 pink tc">Register</h2>
      <img src={man} alt="Icon of a man" className="small-icon" />
      <TextBox>
        Tell us a little bit about yourself & how you’d like to use Audrey
      </TextBox>
    </div>
    <div id="step-2-connect">
      <h2 className="f2 pink tc">Connect</h2>
      <img src={pair} alt="Icon of a pair of people" className="small-icon" />
      <TextBox>
        We will pair you with someone we think you will connect well with and
        help to facilitate your first reading session
      </TextBox>
    </div>
    <div id="step-3-read">
      <h2 className="f2 pink tc">Read</h2>
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
