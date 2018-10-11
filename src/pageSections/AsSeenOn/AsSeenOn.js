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
    <a href="https://www.gadgette.com/2018/06/17/read-with-audrey/" target="_blank" rel="noopener noreferrer" /><img src={gadgette} alt="Gadgette logo" className="h4 pv2" />
    <a href="https://lifehacker.com/why-you-should-read-a-book-with-a-stranger-1827717296" target="_blank" rel="noopener noreferrer" /><img src={lifehacker} alt="Lifehacker logo" className="h3 pv2" />
    <a href="https://www.irishexaminer.com/breakingnews/technow/meet-audrey-the-online-book-app-where-users-read-aloud-to-one-another-854650.html" target="_blank" rel="noopener noreferrer" /><img src={irishexaminer} alt="Irish Examiner logo" className="h3 pv2" />
    <a href="https://www.thriveglobal.com/stories/36262-audrey" target="_blank" rel="noopener noreferrer" /><img src={thriveglobal} alt="Thrive Global logo" className="h4 pv2" />
  </StyledAsSeenOn>
)

AsSeenOn.propTypes = {
  siteTitle: PropTypes.string,
}

export default AsSeenOn
