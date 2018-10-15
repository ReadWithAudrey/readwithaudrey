import React from 'react'
import About from './AboutAudrey.style'
import { TextBox } from '../../components'
import PropTypes from 'prop-types'

const AboutAudrey = () => (
  <About>
    <div id="what-is-audrey">
      <h2 className="f2 pink tc">What is Audrey?</h2>
      <TextBox className="tc lh-copy f4">
        Audrey matches readers with listeners to read thought-provoking books
        aloud together, sparking interesting conversations and creating
        meaningful relationships.
      </TextBox>
    </div>
    <div id="who-for">
      <h2 className="f2 pink tc">Who is it for?</h2>
      <TextBox className="tc lh-copy f4">
        Anyone who enjoys reading, would like to develop a sense of
        connectedness with someone new, and values other people’s perspectives.
      </TextBox>
    </div>
    <div id="who-with">
      <h2 className="f2 pink tc">Who do I read with?</h2>
      <TextBox className="tc lh-copy f4">
        From within our community, we’ll take care to identify a reading partner
        we think you’ll connect well with. Someone with some shared interests to
        you.
      </TextBox>
    </div>
  </About>
)

AboutAudrey.propTypes = {
  siteTitle: PropTypes.string,
}

export default AboutAudrey
