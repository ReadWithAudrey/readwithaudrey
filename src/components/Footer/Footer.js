import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter, FooterNav, Copyright } from './Footer.style'

const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <Link to="/" className="no-underline white ph1 ">
        Home
      </Link>
      <Link to="/Story/" className="no-underline white ph1">
        Our Story
      </Link>
      <Link to="/faq/" className="no-underline white ph1">
        FAQs
      </Link>
      <Link to="/contact/" className="no-underline white ph1">
        Contact Us
      </Link>
    </FooterNav>
    <Copyright>
      &copy; Audrey
      <Link to="/Terms/" className="no-underline black ph1">
        Terms
      </Link>
      <Link to="/Privacy/" className="no-underline black ph1">
        Privacy
      </Link>
    </Copyright>
  </StyledFooter>
)

export default Footer
