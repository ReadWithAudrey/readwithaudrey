import React from 'react'
import StyledExamples from './Examples.style'
import PropTypes from 'prop-types'

const Examples = () => (
  <StyledExamples>
    <h1 className="f2 pink tc">Recent reading partners</h1>
    <ul className="tl">
      <li className="pv2">
        A musician and a school teacher read Musicophilia, by Oliver Sacks.
      </li>
      <li className="pv2">
        A counsellor and medical doctor read Attachment Theory by J Bowlby.
      </li>
      <li className="pv2">
        A retired judge and a history student read Darkest Hour, by Anthony
        McCarten.
      </li>
      <li className="pv2">
        A young playwright and an artist read short stories by Hector Munro.
      </li>
      <li className="pv2">
        A photographer and a retired nurse read Language of Kindness by Christie
        Watson.
      </li>
      <li className="pv2">
        A film maker and a furniture restorer read The Wind in My Hair by Masih
        Alinejad.
      </li>
    </ul>
    <p className="f4 tc">
      We take great care to try to identify the right reading partner for you.
    </p>
  </StyledExamples>
)

Examples.propTypes = {
  siteTitle: PropTypes.string,
}

export default Examples
