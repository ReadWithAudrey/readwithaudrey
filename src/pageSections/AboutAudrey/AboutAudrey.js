import React from 'react'
import About from './AboutAudrey.style'
import { TextBox } from '../../components'
import PropTypes from 'prop-types'

const AboutAudrey = () => (
  <About>
    <div id="what-is-audrey">
      <h2 className="f2 pink tc">What is Audrey?</h2>
      <TextBox className="tc lh-copy f4">
        Audrey is a platform which matches readers with listeners to read
        thought-provoking fiction and non-fiction aloud together.
      </TextBox>
    </div>
    <div id="who-for">
      <h2 className="f2 pink tc">Who is it for?</h2>
      <TextBox className="tc lh-copy f4">
        People who enjoy reading and social connection, and like to hear diverse
        viewpoints.
      </TextBox>
    </div>
    <div id="who-with">
      <h2 className="f2 pink tc">Who do I read with?</h2>
      <TextBox className="tc lh-copy f4">
        We match people with shared interests, but diverse life journeys. You
        can choose to be either the reader or listener.
      </TextBox>
    </div>
  </About>
)

AboutAudrey.propTypes = {
  siteTitle: PropTypes.string,
}

export default AboutAudrey
