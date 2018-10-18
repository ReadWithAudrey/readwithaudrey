import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter, Copyright } from './Footer.style'

const Footer = () => (
  <StyledFooter>
    <Copyright>
      <p className="mid-gray ph2 ph4-ns">&copy; Audrey</p>
      <Link to="/terms/" className="no-underline mid-gray ph2 ph4-ns">
        Terms
      </Link>
      <Link to="/privacy/" className="no-underline mid-gray ph2 ph4-ns">
        Privacy
      </Link>
      <Link to="/contact/" className="no-underline mid-gray ph2 ph4-ns">
        Contact
      </Link>
    </Copyright>
  </StyledFooter>
)

export default Footer
