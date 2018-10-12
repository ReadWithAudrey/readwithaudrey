import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter, Copyright } from './Footer.style'

const Footer = () => (
  <StyledFooter>
    <Copyright>
      &copy; Audrey
      <Link to="/terms/" className="no-underline black ph1">
        Terms
      </Link>
      <Link to="/privacy/" className="no-underline black ph1">
        Privacy
      </Link>
      <Link to="/contact/" className="no-underline black ph1">
        Contact
      </Link>
    </Copyright>
  </StyledFooter>
)

export default Footer
