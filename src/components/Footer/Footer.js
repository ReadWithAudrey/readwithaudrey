import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter, FooterNav, Copyright } from './Footer.style'

const Footer = () => (
  <StyledFooter>
    <FooterNav><Link to="/">Home</Link> | <Link to="/Story/">Our Story</Link> | <Link to="/FAQs/">FAQs</Link> | <Link to="/Contact/">Contact Us</Link></FooterNav>
    <Copyright>&copy; Audrey | <Link to="/Terms/">Terms</Link> | <Link to="/Privacy/">Privacy</Link></Copyright>
  </StyledFooter>
)

export default Footer
