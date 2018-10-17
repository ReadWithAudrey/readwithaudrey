import React from 'react'
import { TextBox } from '../../components'
import StyledHowItWorks from './HowItWorks.style'
import man from '../../images/manicon.svg'
import pair from '../../images/pairicon.png'
import book from '../../images/open-book-black.svg'
import PropTypes from 'prop-types'
import { Button } from '../../components/index'
import { Link } from 'gatsby'

const HowItWorks = () => (
  <StyledHowItWorks>
    <h2 className="f2 pink tc">Three steps to begin your reading adventure</h2>
    <div id="step-1-register">
      <h2 className="f3 pink tc">Join</h2>
      <img src={man} alt="Icon of a man" className="small-icon" />
      <TextBox>
        Tell us a little about yourself and decide how you’d like to use Audrey
        e.g. as a reader or listener, or both.
      </TextBox>
    </div>
    <div id="step-2-connect">
      <h2 className="f3 pink tc">Connect</h2>
      <img src={pair} alt="Icon of a pair of people" className="small-icon" />
      <TextBox>
        We’ll introduce you to your reading partner, share a hand-picked book,
        and help facilitate your first reading session.
      </TextBox>
    </div>
    <div id="step-3-read">
      <h2 className="f3 pink tc">Read</h2>
      <img src={book} alt="Icon of a man" className="small-icon" />
      <TextBox>
        Begin reading your chosen book together. Each reading takes 10-15
        minutes. Enjoy interesting conversations with each other.
      </TextBox>
    </div>
    <Link to="/form1/" className="no-underline white w-100">
      <Button type="register">Get started</Button>
    </Link>
  </StyledHowItWorks>
)

HowItWorks.propTypes = {
  siteTitle: PropTypes.string,
}

export default HowItWorks
