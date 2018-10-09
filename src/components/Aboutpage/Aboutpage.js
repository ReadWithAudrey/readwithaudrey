import React from 'react'
import AboutpageStyled from './Aboutpage.style'
import PropTypes from 'prop-types'

const Aboutpage = () => (
  <AboutpageStyled>
    <div id="what-is-audrey">
      <h2 className="f2 pink tc">What is Audrey?</h2>
      <p className="tc lh-copy">Audrey is a platform which matches readers with listeners to read thought-provoking fiction and non-fiction aloud together.</p>
    </div>
    <div id="who-with">
      <h2 className="f2 pink tc">Who do I read with?</h2>
      <p className="tc lh-copy">We match people with shared interests, but diverse life journeys. You can choose to be either the reader or listener.</p>
    </div>
    <div id="as-seen-on" className="ba bw2 br2 b--pink w-two-thirds h-25">

    </div>
  </AboutpageStyled>
)

Aboutpage.propTypes = {
  siteTitle: PropTypes.string,
}

export default Aboutpage