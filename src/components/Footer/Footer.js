import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter, Copyright } from './Footer.style'
import instagram from '../../images/instagram-mid-grey.png'


const Footer = () => (
  <StyledFooter>
    <Copyright>
        <p className="mid-gray ph1 ph4-ns f5">&copy; Audrey</p>

      <Link to="/contact/" className="no-underline mid-gray pr2 pl4 ph4-ns">
        Contact
      </Link>
      <Link to="/blog/" className="no-underline mid-gray pr4 pl4 ph4-ns">
        Blog
      </Link>
      <a href="https://www.instagram.com/readwithaudrey/" className="no-underline mid-gray ph2 ph4-ns">
      <img src={instagram} alt="book icon" className="h2 ph1" />

      </a>
    </Copyright>
    <Copyright>
      <Link to="/terms/" className="no-underline mid-gray ph2 ph4-ns f6">
        Terms
      </Link>
      <Link to="/privacy/" className="no-underline mid-gray ph2 ph4-ns f6 ">
        Privacy
      </Link>

   
    </Copyright>
  </StyledFooter>
  
)

export default Footer
