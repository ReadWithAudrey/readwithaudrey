import React from 'react'
import StyledAsSeenOn from './AsSeenOn.style'
import PropTypes from 'prop-types'
import gadgette from '../../images/gadgettelogo.png'
import lifehacker from '../../images/lifehackerlogo.png'
import irishexaminer from '../../images/irishexaminerlogo.png'
import thriveglobal from '../../images/thrivegloballogo.jpeg'

const AsSeenOn = () => (
  <StyledAsSeenOn>
    <h2 className="f2 pink tc fw7">As seen on:</h2>
    <img src={gadgette} alt="Gadgette logo" className="h4 pv2" />
    <img src={lifehacker} alt="Lifehacker logo" className="h3 pv2" />
    <img src={irishexaminer} alt="Irish Examiner logo" className="h3 pv2" />
    <img src={thriveglobal} alt="Thrive Global logo" className="h4 pv2" />
  </StyledAsSeenOn>
)

AsSeenOn.propTypes = {
  siteTitle: PropTypes.string,
}

export default AsSeenOn
